import os
import json

from googleapiclient.discovery import build
from googleapiclient.errors import Error

client_service = build('jobs', 'v3')
project_id = 'projects/' + os.environ['GOOGLE_CLOUD_PROJECT']

def job_search(request_metadata, search_term, location_filter):
  try:
    job_query = {
      'languageCodes': ['en'],
      'query': search_term,
      'locationFilters': [
        location_filter
      ]
    }

    request = {
      'request_metadata': request_metadata,
      'search_mode': 'JOB_SEARCH',
      'job_query': job_query,
      'jobView': 'JOB_VIEW_FULL',
      'pageSize': 20
    }

    response = client_service.projects().jobs().search(parent=project_id, body=request).execute()
    if response.get('matchingJobs') is not None:
      out_file = open('jobSearchResults.json', 'w')
      json.dump(response.get('matchingJobs'), out_file, indent=2)
      out_file.close()
      print ('Done adding to json file')
    else:
      out_file = open('jobSearchResults.json', 'w')
      json.dump({}, out_file, indent=2)
      out_file.close()
      print('No matching jobs found.')

  except Error as e:
    print('Got exception while searching for jobs')
    raise e

def delete_job(job_name):
  try:
    client_service.projects().jobs().delete(name=job_name).execute()
    print('Job deleted successfully')
  
  except Error as e:
    print('Got exception while deleting job')
    raise e
  
def update_job(job_name, job_update, field_mask):
  try:
    request = {'job': job_update, 'updateMask': field_mask}
    result = client_service.projects().jobs().patch(name=job_name, body=request).execute()
    return result
  
  except Error as e:
    print('Got exception while updating job')
    raise e

def list_jobs():
  try:
    response = client_service.projects().companies().list(parent=project_id).execute()
    if response.get('companies') is not None:
      print('Companies: ')
      for company in response.get('companies'):
        print('\n%s: %s' % (company.get('displayName'), company.get('name')))
        jobs_response = client_service.projects().jobs().list(parent=project_id, filter='companyName="' + company.get('name') + '"').execute()
        if jobs_response.get('jobs') is not None:
          for job in jobs_response.get('jobs'):
            print('\n%s: %s\n%s' % (job.get('title'), job.get('description'), job.get('addresses')[0]))

    else:
      print('No companies found.')

  except Error as e:
    print('Got exception while listing companies')
    raise e

def create_job(job_create):
  try:
    request = {'job': job_create}
    result = client_service.projects().jobs().create(parent=project_id, body=request).execute()
    print ('Created job: %s' % result)
    return result
  
  except Error as e:
    print('Got exception while creating job')
    raise e

def delete_company(company_name):
  try:
    client_service.projects().companies().delete(name=company_name).execute()
    print('Company deleted successfully')
  
  except Error as e:
    print('Got exception while deleting company')
    raise e

def update_company(company_name, company_update, field_mask):
  try:
    request = {'company': company_update, 'updateMask': field_mask}
    result = client_service.projects().companies().patch(name=company_name, body=request).execute()
    print ('Updated Company: %s' % result)
    return result
  
  except Error as e:
    print('Got exception while updating company')
    raise e

def create_company(company_create):
  try:
    request = {'company': company_create}
    result = client_service.projects().companies().create(parent=project_id, body=request).execute()
    print ('Created Company: %s' % result)
    return result
  
  except Error as e:
    print('Got exception while creating company')
    raise e

def list_companies():
  try:
    response = client_service.projects().companies().list(parent=project_id).execute()
    if response.get('companies') is not None:
      print('Companies:')
      for company in response.get('companies'):
        print('\n%s: %s' % (company.get('displayName'), company.get('description')))
    else:
      print('No companies found.')
  
  except Error as e:
    print('Got exception while listing companies')
    raise e
  
def get_job_names(job_names):
  try:
    response = client_service.projects().companies().list(parent=project_id).execute()
    if response.get('companies') is not None:
      for company in response.get('companies'):
        jobs_response = client_service.projects().jobs().list(parent=project_id, filter='companyName="' + company.get('name') + '"').execute()
        if jobs_response.get('jobs') is not None:
          for job in jobs_response.get('jobs'):
            job_names.append(job.get('name'))

    else:
      print('No companies found.')
    
    return job_names

  except Error as e:
    print('Got exception while listing companies')
    raise e

if __name__ == '__main__':
  updated_job = {
    "addresses": [
      'Reston, VA, US'
    ]
  }
  
  job_names = []
  job_names = get_job_names(job_names)
  for job_name in job_names:
    update_job(job_name, updated_job, 'addresses')

  list_jobs()
  request_metadata = {
    'user_id': 'HashedUserId',
    'session_id': 'HashedSessionId',
    'domain': 'careers.google.com',
  }
  filter_location = {
    'address': 'New York City, NY, US',
    'distanceInMiles': 20
  }
  keyword = 'engineer'
  job_search(request_metadata, keyword, filter_location)









  """#company_name = ("projects/elderworks/companies/c2e33bc2-abed-4279-a2c9-5ee929083424")
  updated_company = {
    'display_name': 'Amazon LLC',
    'external_id': 'meta-llc',
  }
  new_company = {
    'display_name': 'Facebook',
    'external_id': 'facebook-llc',
  }
  new_job = {
    'company_name': company_name,
    'requisition_id': 'GoogleEngineer-1236',
    'title': 'Software Development Engineer (Web)',
    'description': 'Design, engineer, test, deploy, maintain and improve software.',
    'application_info': {
      'uris': ['http://careers.google.com'],
    }
  }
  field_mask = 'display_name'
  request_metadata = {
    'user_id': 'HashedUserId',
    'session_id': 'HashedSessionId',
    'domain': 'careers.google.com',
  }
  #create_job(new_job)
  args = parser.parse_args()
  job_search(request_metadata, args.search_term)
  #list_jobs()
  #create_company(new_company)
  #update_company(company_name, updated_company, field_mask)
  #list_companies()
  #delete_company(company_name)
  
  #list_companies()"""
    
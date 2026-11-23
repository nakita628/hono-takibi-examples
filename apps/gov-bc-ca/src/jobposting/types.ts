type SubIndustry = { Caption?: string | undefined; ID?: number | undefined }
type Industry = {
  Caption?: string | undefined
  ID?: number | undefined
  SubIndustries?: SubIndustry[] | undefined
}
type Error = { Message?: string | undefined }
type JobTypeID =
  | 'Undefined0'
  | 'Full-Time'
  | 'Part-Time'
  | 'Contract'
  | 'Undefined4'
  | 'Undefined5'
  | 'Student'
  | 'Undefined7'
  | 'Undefined8'
  | 'Casual'
  | 'Seasonal'
  | 'Temporary'
  | 'Permanent'
  | 'Co-op'
  | 'Apprenticeship'
type JobType = { Caption?: string | undefined; ID?: JobTypeID | undefined }
type RegionID =
  | 'Undefined'
  | 'Vancouver Island/Coast'
  | 'Mainland/Southwest'
  | 'Thompson-Okanagan'
  | 'Kootenay'
  | 'Cariboo'
  | 'North Coast'
  | 'Nechako'
  | 'Northeast'
type Region = { Caption?: string | undefined; ID?: RegionID | undefined }
type Location = {
  City?: string | undefined
  Province?: string | undefined
  RegionID?: Region | undefined
  RegionName?: string | undefined
}
type MajorProject = { Caption?: string | undefined; ID?: number | undefined }
type RecordType = 'Undefined' | 'Update' | 'Delete'
type Job = {
  EmployerName?: string | undefined
  ExpiryDate?: string | undefined
  JobDescription?: string | undefined
  JobID?: number | undefined
  JobTitle?: string | undefined
  JobTypes?: JobType[] | undefined
  Locations?: Location[] | undefined
  MajorProject?: MajorProject | undefined
  PostedDate?: string | undefined
  RecordType?: RecordType | undefined
  SalaryMax?: number | undefined
  SalaryMin?: number | undefined
  SalaryMultiplier?: number | undefined
  SalaryType?: string | undefined
  Url?: string | undefined
}
type JobFeedResponse = { Jobs?: Job[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Industries': {
      $get:
        | { input: {}; output: Industry[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/jobTypes': {
      $get:
        | { input: {}; output: JobType[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/jobs': {
      $post:
        | {
            input: {
              json: {
                city?: 'Victoria' | 'Vancouver' | undefined
                jobTypes?: [1] | [2] | undefined
                lastRequestDate?: '2018-08-29T00:00:00.000Z' | undefined
                majorProjects?: boolean | undefined
                region?: 1 | 2 | undefined
              }
            }
            output: JobFeedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                city?: 'Victoria' | 'Vancouver' | undefined
                jobTypes?: [1] | [2] | undefined
                lastRequestDate?: '2018-08-29T00:00:00.000Z' | undefined
                majorProjects?: boolean | undefined
                region?: 1 | 2 | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/majorProjects': {
      $get:
        | { input: {}; output: MajorProject[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/regions': {
      $get:
        | { input: {}; output: Region[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes

import { createRoute, z } from '@hono/zod-openapi'

const SubIndustrySchema = z
  .object({
    Caption: z.string().exactOptional().openapi({ description: 'The name of the SubIndustries.' }),
    ID: z.int().exactOptional().openapi({ description: 'Sub Industry ID.' }),
  })
  .openapi({ required: [] })
  .openapi('SubIndustry')

type IndustryType = {
  Caption?: string
  ID?: number
  SubIndustries?: z.infer<typeof SubIndustrySchema>[]
}

const ErrorSchema = z
  .object({ Message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const IndustrySchema: z.ZodType<IndustryType> = z
  .lazy(() =>
    z
      .object({
        Caption: z.string().exactOptional().openapi({ description: 'The name of the Industries.' }),
        ID: z.int().exactOptional().openapi({ description: 'Industry ID.' }),
        SubIndustries: z.array(SubIndustrySchema).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Industry')

const JobTypeIDSchema = z
  .union([
    z.literal('Undefined0'),
    z.literal('Full-Time'),
    z.literal('Part-Time'),
    z.literal('Contract'),
    z.literal('Undefined4'),
    z.literal('Undefined5'),
    z.literal('Student'),
    z.literal('Undefined7'),
    z.literal('Undefined8'),
    z.literal('Casual'),
    z.literal('Seasonal'),
    z.literal('Temporary'),
    z.literal('Permanent'),
    z.literal('Co-op'),
    z.literal('Apprenticeship'),
  ])
  .openapi({ description: 'The type of work.' })
  .openapi('JobTypeID')

const JobTypeSchema = z
  .object({
    Caption: z.string().exactOptional().openapi({ description: 'The name of the Job Type.' }),
    ID: JobTypeIDSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobType')

const RegionIDSchema = z
  .union([
    z.literal('Undefined'),
    z.literal('Vancouver Island/Coast'),
    z.literal('Mainland/Southwest'),
    z.literal('Thompson-Okanagan'),
    z.literal('Kootenay'),
    z.literal('Cariboo'),
    z.literal('North Coast'),
    z.literal('Nechako'),
    z.literal('Northeast'),
  ])
  .openapi({ description: 'A region within B.C.' })
  .openapi('RegionID')

const RegionSchema = z
  .object({
    Caption: z.string().exactOptional().openapi({ description: 'The name of the Region.' }),
    ID: RegionIDSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Region')

const LocationSchema = z
  .object({
    City: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the city where the job is located.' }),
    Province: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the province where the job is located.' }),
    RegionID: RegionSchema.exactOptional(),
    RegionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the region in B.C. where the job is located.' }),
  })
  .openapi({
    description:
      'Details of where a job is located. A job can have up to three associated locations.',
    required: [],
  })
  .openapi('Location')

const MajorProjectSchema = z
  .object({
    Caption: z.string().exactOptional().openapi({ description: 'The name of the Major Project.' }),
    ID: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the Major Project in the WorkBC Job Board database. Use this when restricting the Job Feed to only one Major Project.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MajorProject')

const RecordTypeSchema = z
  .union([z.literal('Undefined'), z.literal('Update'), z.literal('Delete')])
  .openapi({ description: 'The type of change that has happened to this job.' })
  .openapi('RecordType')

const JobSchema = z
  .object({
    EmployerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the employer who is offering the job.' }),
    ExpiryDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "The date that the job will expire. It is the caller's responsibility to remove job postings once they expire. After this date the supplied Url will show a 404 page.",
      }),
    JobDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Details of the job posting. This is limited to 250 characters, and HTML tags are stripped out. For a full description, use the Url property to view the job posting on the WorkBC website.',
      }),
    JobID: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique id of the job in the WorkBC Job Board database.' }),
    JobTitle: z.string().exactOptional().openapi({ description: 'The name of the job posting.' }),
    JobTypes: z
      .array(JobTypeSchema)
      .exactOptional()
      .openapi({ description: 'The types of work associated with this job.' }),
    Locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({ description: 'Details of all of the locations where the job is available.' }),
    MajorProject: MajorProjectSchema.exactOptional(),
    PostedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date that the job was posted.' }),
    RecordType: RecordTypeSchema.exactOptional(),
    SalaryMax: z.float64().exactOptional(),
    SalaryMin: z.float64().exactOptional(),
    SalaryMultiplier: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The amount to multiply SalaryMin and SalaryMax by in order to convert to annual values. This is needed if you want to compare salaries for jobs that have been posted using different salary types.',
      }),
    SalaryType: z.string().exactOptional(),
    Url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for the live job posting on the WorkBC website.' }),
  })
  .openapi({ required: [] })
  .openapi('Job')

const JobFeedResponseSchema = z
  .object({ Jobs: z.array(JobSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('JobFeedResponse')

export const getIndustriesRoute = createRoute({
  method: 'get',
  path: '/Industries',
  tags: ['Job Feed'],
  summary: 'Industries',
  description:
    "The Industries endpoint returns all the Industries and related sub industries \ndefined in WorkBC's Job Board. The response includes the id and caption for \neach industry and each sub industry.\n",
  responses: {
    200: {
      description: 'An array of industries and sub industries',
      content: { 'application/json': { schema: z.array(IndustrySchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getJobTypesRoute = createRoute({
  method: 'get',
  path: '/jobTypes',
  tags: ['Job Feed'],
  summary: 'Job Types',
  description:
    "The Job Types endpoint returns details of all of the\njob types defined in WorkBC's Job Board. The response includes the\nid and caption.\n",
  responses: {
    200: {
      description: 'An array of job types',
      content: { 'application/json': { schema: z.array(JobTypeSchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const postJobsRoute = createRoute({
  method: 'post',
  path: '/jobs',
  tags: ['Job Feed'],
  summary: 'Job Feed',
  description:
    'The job feed endpoint returns an array of job records that satisfy the supplied criteria.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              city: z
                .enum(['Victoria', 'Vancouver'])
                .default('Victoria')
                .exactOptional()
                .openapi({
                  description:
                    'The name of a city within B.C. Only job postings located within the specified city will be included in the response. If not specified, the data is not filtered by city.',
                }),
              jobTypes: z
                .union([z.custom<[1]>(), z.custom<[2]>()])
                .exactOptional()
                .openapi({
                  description:
                    'ID values for types of job to filter on. Only job postings matching all specified values will be included in the response. If not specified, the data is not filtered by job type.',
                  default: [1],
                }),
              lastRequestDate: z
                .literal('2018-08-29T00:00:00.000Z')
                .exactOptional()
                .openapi({
                  description:
                    'The date of the last request. Only job postings changed or deleted after this time will be included in the response. Default is _today_ - 10 days.',
                  default: '2018-08-29',
                }),
              majorProjects: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'When true, only include job postings that have a Major Project associated with them. When false, only include job postings that do not have a Major Project associated with them. If not specified, the data is not filtered by major project, unless the MajorProjectID parameter is used.',
                }),
              region: z
                .union([z.literal(1), z.literal(2)])
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'The unique id of a region within B.C. Only job postings located within the specified region will be included in the response. If not specified, the data is not filtered by region',
                }),
            })
            .openapi({ required: [] }),
          encoding: { color: {} },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'A set of job records.',
      content: { 'application/json': { schema: JobFeedResponseSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMajorProjectsRoute = createRoute({
  method: 'get',
  path: '/majorProjects',
  tags: ['Job Feed'],
  summary: 'Major Projects',
  description:
    "The Major Projects endpoint returns details of all of the\nmajor projects defined in WorkBC's Job Board. The response includes the\nid and caption.\n",
  responses: {
    200: {
      description: 'An array of major projects',
      content: { 'application/json': { schema: z.array(MajorProjectSchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getRegionsRoute = createRoute({
  method: 'get',
  path: '/regions',
  tags: ['Job Feed'],
  summary: 'Regions',
  description:
    "The Regions endpoint returns details of all of the\nregions defined in WorkBC's Job Board. The response includes the\nid and caption.\n",
  responses: {
    200: {
      description: 'An array of regions',
      content: { 'application/json': { schema: z.array(RegionSchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

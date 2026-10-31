import { createRoute, z } from '@hono/zod-openapi'

const BadRequestSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('BadRequest')

const CredentialsSchema = z
  .object({ district_username: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Credentials')

const DistrictSchema = z
  .object({
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    mdr_number: z.string().nullable().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('District')

const NameSchema = z
  .object({
    first: z.string().nullable().exactOptional(),
    last: z.string().nullable().exactOptional(),
    middle: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Name')

const DistrictAdminSchema = z
  .object({
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    email: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    name: NameSchema.exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DistrictAdmin')

const DistrictAdminResponseSchema = z
  .object({ data: DistrictAdminSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictAdminResponse')

const DistrictAdminsResponseSchema = z
  .object({ data: z.array(DistrictAdminSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictAdminsResponse')

const DistrictResponseSchema = z
  .object({ data: DistrictSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictResponse')

const DistrictStatusSchema = z
  .object({
    error: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    instant_login: z.boolean().exactOptional(),
    last_sync: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    launch_date: z.string().exactOptional().openapi({ 'x-validation': true }),
    pause_end: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    pause_start: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    sis_type: z.string().exactOptional().openapi({ 'x-validation': true }),
    state: z
      .enum(['running', 'pending', 'error', 'paused'])
      .exactOptional()
      .openapi({ 'x-validation': true }),
  })
  .openapi({ required: [] })
  .openapi('DistrictStatus')

const DistrictStatusResponseSchema = z
  .object({ data: DistrictStatusSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictStatusResponse')

const DistrictStatusResponsesSchema = z
  .object({ data: z.array(DistrictStatusResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictStatusResponses')

const DistrictsResponseSchema = z
  .object({ data: z.array(DistrictResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DistrictsResponse')

const GradeLevelsResponseSchema = z
  .object({ data: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('GradeLevelsResponse')

const InternalErrorSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('InternalError')

const LocationSchema = z
  .object({
    address: z.string().nullable().exactOptional(),
    city: z.string().nullable().exactOptional(),
    lat: z.string().nullable().exactOptional(),
    lon: z.string().nullable().exactOptional(),
    state: z.string().nullable().exactOptional(),
    zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Location')

const NotFoundSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('NotFound')

const PrincipalSchema = z
  .object({
    email: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Principal')

const SchoolSchema = z
  .object({
    created: z.string().exactOptional().openapi({ 'x-validation': true }),
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    high_grade: z
      .enum([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'PreKindergarten',
        'Kindergarten',
        'PostGraduate',
        'Other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    last_modified: z.string().exactOptional().openapi({ 'x-validation': true }),
    location: LocationSchema.exactOptional(),
    low_grade: z
      .enum([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'PreKindergarten',
        'Kindergarten',
        'PostGraduate',
        'Other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    mdr_number: z.string().nullable().exactOptional(),
    name: z.string().exactOptional(),
    nces_id: z.string().nullable().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    principal: PrincipalSchema.exactOptional(),
    school_number: z.string().exactOptional(),
    sis_id: z.string().exactOptional(),
    state_id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('School')

const SchoolAdminSchema = z
  .object({
    credentials: CredentialsSchema.exactOptional(),
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    email: z.string().exactOptional(),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    name: NameSchema.exactOptional(),
    schools: z.array(z.string()).exactOptional().openapi({ 'x-validation': true }),
    staff_id: z.string().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchoolAdmin')

const SchoolAdminResponseSchema = z
  .object({ data: SchoolAdminSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SchoolAdminResponse')

const SchoolAdminsResponseSchema = z
  .object({ data: z.array(SchoolAdminResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SchoolAdminsResponse')

const SchoolResponseSchema = z
  .object({ data: SchoolSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SchoolResponse')

const SchoolsResponseSchema = z
  .object({ data: z.array(SchoolResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SchoolsResponse')

const TermSchema = z
  .object({
    end_date: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    name: z.string().nullable().exactOptional(),
    start_date: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
  })
  .openapi({ required: [] })
  .openapi('Term')

const SectionSchema = z
  .object({
    course_description: z.string().nullable().exactOptional(),
    course_name: z.string().nullable().exactOptional(),
    course_number: z.string().nullable().exactOptional(),
    created: z.string().exactOptional().openapi({ 'x-validation': true }),
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    grade: z
      .enum([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'PreKindergarten',
        'Kindergarten',
        'PostGraduate',
        'Other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    last_modified: z.string().exactOptional().openapi({ 'x-validation': true }),
    name: z.string().exactOptional(),
    period: z.string().nullable().exactOptional(),
    school: z.string().exactOptional().openapi({ 'x-validation': true }),
    section_number: z.string().nullable().exactOptional(),
    sis_id: z.string().exactOptional(),
    students: z.array(z.string()).exactOptional().openapi({ 'x-validation': true }),
    subject: z
      .enum([
        'english/language arts',
        'math',
        'science',
        'social studies',
        'language',
        'homeroom/advisory',
        'interventions/online learning',
        'technology and engineering',
        'PE and health',
        'arts and music',
        'other',
      ])
      .exactOptional()
      .openapi({ 'x-validation': true }),
    teacher: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    teachers: z.array(z.string()).exactOptional().openapi({ 'x-validation': true }),
    term: TermSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Section')

const SectionResponseSchema = z
  .object({ data: SectionSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('SectionResponse')

const SectionsResponseSchema = z
  .object({ data: z.array(SectionResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('SectionsResponse')

const StudentSchema = z
  .object({
    created: z.string().exactOptional().openapi({ 'x-validation': true }),
    credentials: CredentialsSchema.exactOptional(),
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    dob: z
      .string()
      .regex(/(?:[0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/)
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    ell_status: z.enum(['Y', 'N', '']).nullable().exactOptional().openapi({ 'x-validation': true }),
    email: z.string().nullable().exactOptional(),
    gender: z.enum(['M', 'F', '']).nullable().exactOptional().openapi({ 'x-validation': true }),
    grade: z
      .enum([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'PreKindergarten',
        'Kindergarten',
        'PostGraduate',
        'Other',
      ])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    graduation_year: z.string().nullable().exactOptional().openapi({ 'x-validation': true }),
    hispanic_ethnicity: z
      .enum(['Y', 'N', ''])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    last_modified: z.string().exactOptional().openapi({ 'x-validation': true }),
    location: LocationSchema.exactOptional(),
    name: NameSchema.exactOptional(),
    race: z
      .enum([
        'Caucasian',
        'Asian',
        'Black or African American',
        'American Indian',
        'Hawaiian or Other Pacific Islander',
        'Two or More Races',
        'Unknown',
        '',
      ])
      .nullable()
      .exactOptional()
      .openapi({ 'x-validation': true }),
    school: z.string().exactOptional().openapi({ 'x-validation': true }),
    schools: z.array(z.string()).exactOptional().openapi({ 'x-validation': true }),
    sis_id: z.string().exactOptional(),
    state_id: z.string().nullable().exactOptional(),
    student_number: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Student')

const StudentContactSchema = z
  .object({
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    email: z.string().nullable().exactOptional(),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    name: z.string().exactOptional(),
    phone: z.string().nullable().exactOptional(),
    phone_type: z.string().nullable().exactOptional(),
    relationship: z.string().nullable().exactOptional(),
    sis_id: z.string().nullable().exactOptional(),
    student: z.string().exactOptional().openapi({ 'x-validation': true }),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StudentContact')

const StudentContactResponseSchema = z
  .object({ data: StudentContactSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StudentContactResponse')

const StudentContactsForStudentResponseSchema = z
  .object({ data: z.array(StudentContactSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('StudentContactsForStudentResponse')

const StudentContactsResponseSchema = z
  .object({ data: z.array(StudentContactResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('StudentContactsResponse')

const StudentResponseSchema = z
  .object({ data: StudentSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('StudentResponse')

const StudentsResponseSchema = z
  .object({ data: z.array(StudentResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('StudentsResponse')

const TeacherSchema = z
  .object({
    created: z.string().exactOptional().openapi({ 'x-validation': true }),
    credentials: CredentialsSchema.exactOptional(),
    district: z.string().exactOptional().openapi({ 'x-validation': true }),
    email: z.string().nullable().exactOptional(),
    id: z.string().exactOptional().openapi({ 'x-validation': true }),
    last_modified: z.string().exactOptional().openapi({ 'x-validation': true }),
    name: NameSchema.exactOptional(),
    school: z.string().exactOptional().openapi({ 'x-validation': true }),
    schools: z.array(z.string()).exactOptional().openapi({ 'x-validation': true }),
    sis_id: z.string().exactOptional(),
    state_id: z.string().nullable().exactOptional(),
    teacher_number: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Teacher')

const TeacherResponseSchema = z
  .object({ data: TeacherSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('TeacherResponse')

const TeachersResponseSchema = z
  .object({ data: z.array(TeacherResponseSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TeachersResponse')

const BadRequestResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestSchema } },
}

const InternalErrorResponse = {
  description: 'Internal Error',
  content: { 'application/json': { schema: InternalErrorSchema } },
}

const NotFoundResponse = {
  description: 'Entity Not Found',
  content: { 'application/json': { schema: NotFoundSchema } },
}

const OauthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://clever.com/oauth/authorize',
      scopes: {},
      tokenUrl: 'https://clever.com/oauth/tokens',
    },
  },
  type: 'oauth2',
}

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/contacts',
  tags: ['Contacts'],
  description: 'Returns a list of student contacts',
  operationId: 'getContacts',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentContactsResponseSchema } },
    },
  },
})

export const getContactsIdRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}',
  tags: ['Contacts'],
  description: 'Returns a specific student contact',
  operationId: 'getContact',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentContactResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getContactsIdDistrictRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}/district',
  tags: ['Contacts'],
  description: 'Returns the district for a student contact',
  operationId: 'getDistrictForStudentContact',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getContactsIdStudentRoute = createRoute({
  method: 'get',
  path: '/contacts/{id}/student',
  tags: ['Contacts'],
  description: 'Returns the student for a student contact',
  operationId: 'getStudentForContact',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictAdminsRoute = createRoute({
  method: 'get',
  path: '/district_admins',
  tags: ['District Admins'],
  description: 'Returns a list of district admins',
  operationId: 'getDistrictAdmins',
  request: {
    query: z.object({
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      show_links: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'show_links', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictAdminsResponseSchema } },
    },
  },
})

export const getDistrictAdminsIdRoute = createRoute({
  method: 'get',
  path: '/district_admins/{id}',
  tags: ['District Admins'],
  description: 'Returns a specific district admin',
  operationId: 'getDistrictAdmin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictAdminResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsRoute = createRoute({
  method: 'get',
  path: '/districts',
  tags: ['Districts'],
  description:
    'Returns a list of districts. In practice this will only return the one district associated with the bearer token',
  operationId: 'getDistricts',
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictsResponseSchema } },
    },
  },
})

export const getDistrictsIdRoute = createRoute({
  method: 'get',
  path: '/districts/{id}',
  tags: ['Districts'],
  description: 'Returns a specific district',
  operationId: 'getDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'include', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdAdminsRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/admins',
  tags: ['Districts'],
  description: 'Returns the admins for a district',
  operationId: 'getAdminsForDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictAdminsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdSchoolsRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/schools',
  tags: ['Districts'],
  description: 'Returns the schools for a district',
  operationId: 'getSchoolsForDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdSectionsRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/sections',
  tags: ['Districts'],
  description: 'Returns the sections for a district',
  operationId: 'getSectionsForDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdStatusRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/status',
  tags: ['Districts'],
  description: 'Returns the status of the district',
  operationId: 'getDistrictStatus',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictStatusResponsesSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdStudentsRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/students',
  tags: ['Districts'],
  description: 'Returns the students for a district',
  operationId: 'getStudentsForDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getDistrictsIdTeachersRoute = createRoute({
  method: 'get',
  path: '/districts/{id}/teachers',
  tags: ['Districts'],
  description: 'Returns the teachers for a district',
  operationId: 'getTeachersForDistrict',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeachersResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolAdminsRoute = createRoute({
  method: 'get',
  path: '/school_admins',
  tags: ['School Admins'],
  description: 'Returns a list of school admins',
  operationId: 'getSchoolAdmins',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolAdminsResponseSchema } },
    },
  },
})

export const getSchoolAdminsIdRoute = createRoute({
  method: 'get',
  path: '/school_admins/{id}',
  tags: ['School Admins'],
  description: 'Returns a specific school admin',
  operationId: 'getSchoolAdmin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'include', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolAdminResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolAdminsIdSchoolsRoute = createRoute({
  method: 'get',
  path: '/school_admins/{id}/schools',
  tags: ['School Admins'],
  description: 'Returns the schools for a school admin',
  operationId: 'getSchoolsForSchoolAdmin',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolsRoute = createRoute({
  method: 'get',
  path: '/schools',
  tags: ['Schools'],
  description: 'Returns a list of schools',
  operationId: 'getSchools',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolsResponseSchema } },
    },
  },
})

export const getSchoolsIdRoute = createRoute({
  method: 'get',
  path: '/schools/{id}',
  tags: ['Schools'],
  description: 'Returns a specific school',
  operationId: 'getSchool',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolsIdDistrictRoute = createRoute({
  method: 'get',
  path: '/schools/{id}/district',
  tags: ['Schools'],
  description: 'Returns the district for a school',
  operationId: 'getDistrictForSchool',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolsIdSectionsRoute = createRoute({
  method: 'get',
  path: '/schools/{id}/sections',
  tags: ['Schools'],
  description: 'Returns the sections for a school',
  operationId: 'getSectionsForSchool',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolsIdStudentsRoute = createRoute({
  method: 'get',
  path: '/schools/{id}/students',
  tags: ['Schools'],
  description: 'Returns the students for a school',
  operationId: 'getStudentsForSchool',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSchoolsIdTeachersRoute = createRoute({
  method: 'get',
  path: '/schools/{id}/teachers',
  tags: ['Schools'],
  description: 'Returns the teachers for a school',
  operationId: 'getTeachersForSchool',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeachersResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsRoute = createRoute({
  method: 'get',
  path: '/sections',
  tags: ['Sections'],
  description: 'Returns a list of sections',
  operationId: 'getSections',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionsResponseSchema } },
    },
  },
})

export const getSectionsIdRoute = createRoute({
  method: 'get',
  path: '/sections/{id}',
  tags: ['Sections'],
  description: 'Returns a specific section',
  operationId: 'getSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsIdDistrictRoute = createRoute({
  method: 'get',
  path: '/sections/{id}/district',
  tags: ['Sections'],
  description: 'Returns the district for a section',
  operationId: 'getDistrictForSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsIdSchoolRoute = createRoute({
  method: 'get',
  path: '/sections/{id}/school',
  tags: ['Sections'],
  description: 'Returns the school for a section',
  operationId: 'getSchoolForSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsIdStudentsRoute = createRoute({
  method: 'get',
  path: '/sections/{id}/students',
  tags: ['Sections'],
  description: 'Returns the students for a section',
  operationId: 'getStudentsForSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsIdTeacherRoute = createRoute({
  method: 'get',
  path: '/sections/{id}/teacher',
  tags: ['Sections'],
  description: 'Returns the primary teacher for a section',
  operationId: 'getTeacherForSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeacherResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getSectionsIdTeachersRoute = createRoute({
  method: 'get',
  path: '/sections/{id}/teachers',
  tags: ['Sections'],
  description: 'Returns the teachers for a section',
  operationId: 'getTeachersForSection',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeachersResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsRoute = createRoute({
  method: 'get',
  path: '/students',
  tags: ['Students'],
  description: 'Returns a list of students',
  operationId: 'getStudents',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentsResponseSchema } },
    },
  },
})

export const getStudentsIdRoute = createRoute({
  method: 'get',
  path: '/students/{id}',
  tags: ['Students'],
  description: 'Returns a specific student',
  operationId: 'getStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'include', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsIdContactsRoute = createRoute({
  method: 'get',
  path: '/students/{id}/contacts',
  tags: ['Students'],
  description: 'Returns the contacts for a student',
  operationId: 'getContactsForStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentContactsForStudentResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsIdDistrictRoute = createRoute({
  method: 'get',
  path: '/students/{id}/district',
  tags: ['Students'],
  description: 'Returns the district for a student',
  operationId: 'getDistrictForStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsIdSchoolRoute = createRoute({
  method: 'get',
  path: '/students/{id}/school',
  tags: ['Students'],
  description: 'Returns the primary school for a student',
  operationId: 'getSchoolForStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsIdSectionsRoute = createRoute({
  method: 'get',
  path: '/students/{id}/sections',
  tags: ['Students'],
  description: 'Returns the sections for a student',
  operationId: 'getSectionsForStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getStudentsIdTeachersRoute = createRoute({
  method: 'get',
  path: '/students/{id}/teachers',
  tags: ['Students'],
  description: 'Returns the teachers for a student',
  operationId: 'getTeachersForStudent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeachersResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersRoute = createRoute({
  method: 'get',
  path: '/teachers',
  tags: ['Teachers'],
  description: 'Returns a list of teachers',
  operationId: 'getTeachers',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'where', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeachersResponseSchema } },
    },
  },
})

export const getTeachersIdRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}',
  tags: ['Teachers'],
  description: 'Returns a specific teacher',
  operationId: 'getTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'include', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: TeacherResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersIdDistrictRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}/district',
  tags: ['Teachers'],
  description: 'Returns the district for a teacher',
  operationId: 'getDistrictForTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: DistrictResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersIdGradeLevelsRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}/grade_levels',
  tags: ['Teachers'],
  description: 'Returns the grade levels for sections a teacher teaches',
  operationId: 'getGradeLevelsForTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: GradeLevelsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersIdSchoolRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}/school',
  tags: ['Teachers'],
  description: 'Retrieves school info for a teacher.',
  operationId: 'getSchoolForTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SchoolResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersIdSectionsRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}/sections',
  tags: ['Teachers'],
  description: 'Returns the sections for a teacher',
  operationId: 'getSectionsForTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: SectionsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

export const getTeachersIdStudentsRoute = createRoute({
  method: 'get',
  path: '/teachers/{id}/students',
  tags: ['Teachers'],
  description: 'Returns the students for a teacher',
  operationId: 'getStudentsForTeacher',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'limit', schema: { type: 'integer' }, required: false },
        }),
      starting_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'starting_after',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ending_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ending_before',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK Response',
      content: { 'application/json': { schema: StudentsResponseSchema } },
    },
    404: NotFoundResponse,
  },
})

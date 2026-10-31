import { createRoute, z } from '@hono/zod-openapi'

const AcademicCertificateSchemaSchema = z
  .object({
    CertificateData: z
      .object({
        Examination: z
          .object({
            month: z
              .string()
              .min(1)
              .openapi({ example: 'MARCH', xml: { attribute: true } }),
            name: z
              .string()
              .min(1)
              .openapi({
                example: 'SENION SCHOOL CERTIFICATE EXAMINATION',
                xml: { attribute: true },
              }),
            year: z
              .string()
              .min(1)
              .openapi({ example: 2019, xml: { attribute: true } }),
          })
          .openapi({ required: ['name', 'month', 'year'] }),
        Performance: z
          .object({
            Subjects: z
              .array(
                z
                  .object({
                    code: z
                      .string()
                      .min(1)
                      .openapi({ example: 30, xml: { attribute: true } }),
                    gp: z.string().openapi({ example: '', xml: { attribute: true } }),
                    gpMax: z.string().openapi({ example: '', xml: { attribute: true } }),
                    grade: z
                      .string()
                      .min(1)
                      .openapi({ example: 'A2', xml: { attribute: true } }),
                    marksMax: z.int().openapi({ example: '', xml: { attribute: true } }),
                    marksMaxPractical: z.int().openapi({ example: '', xml: { attribute: true } }),
                    marksMaxTheory: z.int().openapi({ example: '', xml: { attribute: true } }),
                    marksPractical: z.int().openapi({ example: 17, xml: { attribute: true } }),
                    marksTheory: z.int().openapi({ example: 70, xml: { attribute: true } }),
                    marksTotal: z.int().openapi({ example: 87, xml: { attribute: true } }),
                    name: z
                      .string()
                      .min(1)
                      .openapi({ example: 'ECONOMICS', xml: { attribute: true } }),
                  })
                  .openapi({
                    required: [
                      'name',
                      'code',
                      'marksTheory',
                      'marksMaxTheory',
                      'marksPractical',
                      'marksMaxPractical',
                      'marksTotal',
                      'marksMax',
                      'gp',
                      'gpMax',
                      'grade',
                    ],
                    xml: { name: 'Subject' },
                  }),
              )
              .openapi({ xml: { name: 'Subjects', wrapped: true } }),
            cgpa: z.string().openapi({ example: '', xml: { attribute: true } }),
            cgpaMax: z.string().openapi({ example: '', xml: { attribute: true } }),
            grade: z.string().openapi({ example: '', xml: { attribute: true } }),
            marksMax: z.string().openapi({ example: '', xml: { attribute: true } }),
            marksTotal: z.string().openapi({ example: '', xml: { attribute: true } }),
            percentage: z.string().openapi({ example: '', xml: { attribute: true } }),
            result: z
              .string()
              .min(1)
              .openapi({ example: 'PASS', xml: { attribute: true } }),
            resultDate: z
              .string()
              .min(1)
              .openapi({ example: '02-05-2019', xml: { attribute: true } }),
            updateDate: z.string().openapi({ example: '', xml: { attribute: true } }),
          })
          .openapi({
            required: [
              'result',
              'marksTotal',
              'marksMax',
              'percentage',
              'cgpa',
              'cgpaMax',
              'grade',
              'resultDate',
              'updateDate',
              'Subjects',
            ],
          }),
        School: z
          .object({
            code: z
              .string()
              .min(1)
              .openapi({ example: 20020, xml: { attribute: true } }),
            name: z
              .string()
              .min(1)
              .openapi({ example: 'DELHI PUBLIC SCHOOL GURGAON', xml: { attribute: true } }),
          })
          .openapi({ required: ['name', 'code'] }),
      })
      .openapi({ required: ['School', 'Examination', 'Performance'] }),
    IssuedBy: z
      .object({
        Organization: z
          .object({
            Address: z
              .object({
                country: z
                  .string()
                  .min(1)
                  .openapi({ example: 'IN', xml: { attribute: true } }),
                district: z.string().openapi({ example: '', xml: { attribute: true } }),
                house: z.string().openapi({ example: '', xml: { attribute: true } }),
                landmark: z.string().openapi({ example: '', xml: { attribute: true } }),
                line1: z.string().openapi({ example: '', xml: { attribute: true } }),
                line2: z.string().openapi({ example: '', xml: { attribute: true } }),
                locality: z.string().openapi({ example: '', xml: { attribute: true } }),
                pin: z.string().openapi({ example: '', xml: { attribute: true } }),
                state: z.string().openapi({ example: '', xml: { attribute: true } }),
                type: z.string().openapi({ example: '', xml: { attribute: true } }),
                vtc: z.string().openapi({ example: '', xml: { attribute: true } }),
              })
              .openapi({
                required: [
                  'type',
                  'line1',
                  'line2',
                  'house',
                  'landmark',
                  'locality',
                  'vtc',
                  'district',
                  'pin',
                  'state',
                  'country',
                ],
              }),
            code: z.string().openapi({ example: '', xml: { attribute: true } }),
            name: z
              .string()
              .min(1)
              .openapi({
                example: 'Central Board of Secondary Education',
                xml: { attribute: true },
              }),
            tin: z.string().openapi({ example: '', xml: { attribute: true } }),
            type: z
              .string()
              .min(1)
              .openapi({ example: 'CG', xml: { attribute: true } }),
            uid: z.string().openapi({ example: '', xml: { attribute: true } }),
          })
          .openapi({ required: ['name', 'code', 'tin', 'uid', 'type', 'Address'] }),
      })
      .openapi({ required: ['Organization'] }),
    IssuedTo: z
      .object({
        Person: z
          .object({
            Address: z
              .object({
                country: z
                  .string()
                  .min(1)
                  .openapi({ example: 'IN', xml: { attribute: true } }),
                district: z.string().openapi({ example: '', xml: { attribute: true } }),
                house: z.string().openapi({ example: '', xml: { attribute: true } }),
                landmark: z.string().openapi({ example: null, xml: { attribute: true } }),
                line1: z.string().openapi({ example: '', xml: { attribute: true } }),
                line2: z.string().openapi({ example: '', xml: { attribute: true } }),
                locality: z.string().openapi({ example: '', xml: { attribute: true } }),
                pin: z.string().openapi({ example: '', xml: { attribute: true } }),
                state: z.string().openapi({ example: '', xml: { attribute: true } }),
                type: z.string().min(1).openapi({ example: 'permanent' }),
                vtc: z.string().openapi({ example: '', xml: { attribute: true } }),
              })
              .openapi({
                required: [
                  'type',
                  'line1',
                  'line2',
                  'house',
                  'landmark',
                  'locality',
                  'vtc',
                  'district',
                  'pin',
                  'state',
                  'country',
                ],
              }),
            Photo: z
              .object({ format: z.string().openapi({ xml: { attribute: true } }) })
              .openapi({ required: ['format'] }),
            category: z
              .string()
              .min(1)
              .openapi({ example: 'SC', xml: { attribute: true } }),
            disabilityStatus: z.string().openapi({ example: '', xml: { attribute: true } }),
            dob: z
              .string()
              .min(1)
              .openapi({ example: '01-10-1988', xml: { attribute: true } }),
            email: z.string().openapi({ example: '', xml: { attribute: true } }),
            gender: z.string().openapi({ example: '', xml: { attribute: true } }),
            maritalStatus: z.string().openapi({ example: '', xml: { attribute: true } }),
            motherName: z
              .string()
              .min(1)
              .openapi({ example: 'SUNITA DEVI', xml: { attribute: true } }),
            name: z
              .string()
              .min(1)
              .openapi({ example: 'ANAND KUMAR', xml: { attribute: true } }),
            phone: z.string().openapi({ example: '', xml: { attribute: true } }),
            religion: z.string().openapi({ example: '', xml: { attribute: true } }),
            swd: z
              .string()
              .min(1)
              .openapi({ example: 'PRAMOD KUMAR', xml: { attribute: true } }),
            swdIndicator: z
              .string()
              .min(1)
              .openapi({ example: 'S', xml: { attribute: true } }),
            title: z.string().openapi({ example: '', xml: { attribute: true } }),
            uid: z.string().openapi({ example: '', xml: { attribute: true } }),
          })
          .openapi({
            required: [
              'uid',
              'title',
              'name',
              'dob',
              'swd',
              'swdIndicator',
              'motherName',
              'gender',
              'maritalStatus',
              'disabilityStatus',
              'category',
              'religion',
              'phone',
              'email',
              'Address',
              'Photo',
            ],
          }),
      })
      .openapi({ required: ['Person'] }),
    issueDate: z.string().openapi({ example: ' ', xml: { attribute: true } }),
    issuedAt: z.string().openapi({ example: '', xml: { attribute: true } }),
    language: z
      .string()
      .min(1)
      .openapi({ example: 99, xml: { attribute: true } }),
    name: z
      .string()
      .min(1)
      .openapi({ example: 'Secondary School Certificate', xml: { attribute: true } }),
    number: z.int().openapi({ example: 1100044, xml: { attribute: true } }),
    status: z
      .string()
      .min(1)
      .openapi({ example: 'A', xml: { attribute: true } }),
    type: z.string().openapi({ example: 'SSCER', xml: { attribute: true } }),
    validFromDate: z.string().openapi({ example: ' ', xml: { attribute: true } }),
  })
  .openapi({
    required: [
      'language',
      'name',
      'type',
      'number',
      'issuedAt',
      'issueDate',
      'validFromDate',
      'status',
      'IssuedBy',
      'IssuedTo',
      'CertificateData',
    ],
    xml: { name: 'Certificate' },
  })
  .openapi('AcademicCertificateSchema')

const ConsentArtifactSchemaSchema = z
  .object({
    consent: z
      .object({
        consentId: z
          .uuid()
          .min(1)
          .openapi({
            description: 'A unique consent id in UUID format.',
            example: 'ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba',
          }),
        data: z.object({ id: z.string().min(1) }).openapi({ required: ['id'] }),
        dataConsumer: z.object({ id: z.string().min(1) }).openapi({ required: ['id'] }),
        dataProvider: z.object({ id: z.string().min(1) }).openapi({ required: ['id'] }),
        permission: z
          .object({
            access: z.string().min(1),
            dateRange: z
              .object({
                from: z.iso
                  .datetime({ offset: true })
                  .min(1)
                  .openapi({
                    description:
                      'Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ',
                  }),
                to: z.iso
                  .datetime({ offset: true })
                  .min(1)
                  .openapi({
                    description:
                      'Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ',
                  }),
              })
              .openapi({ required: ['from', 'to'] }),
            frequency: z
              .object({ repeats: z.number(), unit: z.string().min(1), value: z.number() })
              .openapi({ required: ['unit', 'value', 'repeats'] }),
          })
          .openapi({ required: ['access', 'dateRange', 'frequency'] }),
        purpose: z
          .object({ description: z.string().min(1) })
          .openapi({ required: ['description'] }),
        timestamp: z.iso
          .datetime({ offset: true })
          .min(1)
          .openapi({
            description: 'Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ',
          }),
        user: z
          .object({
            email: z.string().min(1),
            idNumber: z.string().min(1),
            idType: z.string().min(1),
            mobile: z.string().min(1),
          })
          .openapi({ required: ['idType', 'idNumber', 'mobile', 'email'] }),
      })
      .openapi({
        required: [
          'consentId',
          'timestamp',
          'dataConsumer',
          'dataProvider',
          'purpose',
          'user',
          'data',
          'permission',
        ],
      }),
    signature: z.object({ signature: z.string() }).openapi({ required: ['signature'] }),
  })
  .openapi({ required: ['consent', 'signature'] })
  .openapi('ConsentArtifactSchema')

const _400ErrorResponse = {
  description: 'Bad request',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z
            .enum([
              'missing_parameter',
              'invalid_parameter',
              'invalid_format',
              'invalid_txnid',
              'invalid_consentid',
            ])
            .exactOptional(),
          errorDescription: z
            .enum([
              'Please provide all mandatory parameters',
              'Bad request',
              'The format parameter is invalid',
              'The txnId parameter must be in UUID format',
              'The consentId parameter must be in UUID format',
            ])
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _401ErrorResponse = {
  description: 'Unauthorized access',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.enum(['invalid_authentication', 'invalid_authorization']).exactOptional(),
          errorDescription: z
            .enum(['Authentication failed', 'You are not authorized to use this API'])
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _404ErrorResponse = {
  description: 'No record found',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.enum(['record_not_found', 'url_not_found']).exactOptional(),
          errorDescription: z
            .enum(['No record found', 'Your API url or path is incorrect'])
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _500ErrorResponse = {
  description: 'Internal server error',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.literal('internal_server_error').exactOptional(),
          errorDescription: z.literal('Internal server error').exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _502ErrorResponse = {
  description: 'Bad gateway',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.literal('bad_gatewy').exactOptional(),
          errorDescription: z
            .literal('Publisher service returned an invalid response')
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _503ErrorResponse = {
  description: 'Service unavailable',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.literal('service_unavailable').exactOptional(),
          errorDescription: z
            .literal('Publisher service is temporarily unavailable')
            .exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const _504ErrorResponse = {
  description: 'Gateway timeout',
  content: {
    'application/json': {
      schema: z
        .object({
          error: z.literal('gateway_timeout').exactOptional(),
          errorDescription: z.literal('Publisher service did not respond in time').exactOptional(),
        })
        .openapi({ required: [] }),
    },
  },
}

const ApiKeySecurityScheme = { in: 'header', name: 'X-APISETU-APIKEY', type: 'apiKey' }

const ClientIdSecurityScheme = { in: 'header', name: 'X-APISETU-CLIENTID', type: 'apiKey' }

export const postLicerCertificateRoute = createRoute({
  method: 'post',
  path: '/licer/certificate',
  tags: ['APIs'],
  summary: 'Insurance Policy - Life',
  description: 'API to verify Insurance Policy - Life.',
  operationId: 'licer',
  request: {
    body: {
      description: 'Request format',
      content: {
        'application/json': {
          schema: z
            .object({
              certificateParameters: z
                .object({
                  DOB: z
                    .string()
                    .openapi({
                      description: 'Date of birth in DD-MM-YYYY format',
                      example: '31-12-1980',
                    }),
                  policynumber: z
                    .string()
                    .openapi({ description: 'Policy Number', example: '123456' }),
                })
                .exactOptional()
                .openapi({ required: ['policynumber', 'DOB'] }),
              consentArtifact: ConsentArtifactSchemaSchema.exactOptional(),
              format: z
                .literal('pdf')
                .openapi({ description: 'The format of the certificate in response.' }),
              txnId: z
                .uuid()
                .openapi({
                  description:
                    'A unique transaction id for this request in UUID format. It is used for tracking the request.',
                  example: 'f7f1469c-29b0-4325-9dfc-c567200a70f7',
                }),
            })
            .openapi({ required: ['txnId', 'format'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'The certificate data in response body in PDF, XML or JSON format as requested in format parameter.',
      content: {},
    },
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    404: _404ErrorResponse,
    500: _500ErrorResponse,
    502: _502ErrorResponse,
    503: _503ErrorResponse,
    504: _504ErrorResponse,
  },
  security: [{ apiKey: [], clientId: [] }],
})

import { createRoute, z } from '@hono/zod-openapi'

const AuthenticationErrorSchema = z
  .object({ error: z.string(), status: z.literal('error').exactOptional() })
  .openapi({ required: ['error'], title: 'authentication_error_response' })
  .openapi('AuthenticationError')

const CombinedSubmissionActionSchema = z
  .object({
    action_category: z.enum(['notification', 'file_upload']),
    action_type: z.enum(['webhook', 'slack_webhook', 'email', 'aws_s3_upload']),
    id: z.string(),
    integration_id: z.string().nullable(),
    result_data: z.object({}),
    state: z.enum(['pending', 'processed', 'failed', 'error']),
  })
  .openapi({
    required: ['id', 'integration_id', 'state', 'action_category', 'action_type', 'result_data'],
    title: 'combined_submission_action',
  })
  .openapi('CombinedSubmissionAction')

const ErrorSchema = z
  .object({ error: z.string(), status: z.literal('error') })
  .openapi({ required: ['status', 'error'], title: 'error_response' })
  .openapi('Error')

const InvalidRequestSchema = z
  .object({ errors: z.array(z.string()), status: z.literal('error') })
  .openapi({ required: ['status', 'errors'], title: 'invalid_request_response' })
  .openapi('InvalidRequest')

const SubmissionActionSchema = z
  .object({
    action_category: z.enum(['notification', 'file_upload']),
    action_type: z.enum(['webhook', 'slack_webhook', 'email', 'aws_s3_upload']),
    id: z.string(),
    integration_id: z.string().nullable(),
    result_data: z.object({}),
    state: z.enum(['pending', 'processed', 'failed', 'error']),
  })
  .openapi({
    required: ['id', 'integration_id', 'state', 'action_category', 'action_type', 'result_data'],
    title: 'submission_action',
  })
  .openapi('SubmissionAction')

const SubmissionDataRequestSchema = z
  .object({
    auth_phone_number_hash: z.string().nullable().exactOptional(),
    auth_provider: z.string().nullable().exactOptional(),
    auth_second_factor_type: z
      .enum(['none', 'phone_number', 'totp', 'mobile_push', 'security_key', 'fingerprint'])
      .exactOptional(),
    auth_session_id_hash: z.string().nullable().exactOptional(),
    auth_session_started_at: z.string().nullable().exactOptional(),
    auth_type: z
      .enum(['none', 'password', 'oauth', 'email_link', 'phone_number', 'ldap', 'saml'])
      .exactOptional(),
    auth_user_id_hash: z.string().nullable().exactOptional(),
    auth_username_hash: z.string().nullable().exactOptional(),
    completed_at: z.string().nullable().exactOptional(),
    email: z.string().nullable(),
    fields: z.array(z.string()).nullable(),
    id: z.string(),
    ip_address: z.string().nullable().exactOptional(),
    metadata: z.object({}),
    name: z.string().nullable(),
    order: z.int(),
    sort_order: z.int(),
    state: z.enum(['pending', 'completed']),
    submission_id: z.string().exactOptional(),
    user_agent: z.string().nullable().exactOptional(),
    viewed_at: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: ['id', 'name', 'email', 'order', 'sort_order', 'fields', 'metadata', 'state'],
    title: 'submission_data_request',
  })
  .openapi('SubmissionDataRequest')

const SubmissionSchema = z
  .object({
    actions: z.array(SubmissionActionSchema).exactOptional(),
    batch_id: z.string().nullable().exactOptional(),
    data: z.object({}).nullable().exactOptional(),
    data_requests: z.array(SubmissionDataRequestSchema).exactOptional(),
    download_url: z.string().nullable().exactOptional(),
    editable: z.boolean().nullable().exactOptional(),
    expired: z.boolean(),
    expires_at: z.string().nullable().exactOptional(),
    id: z.string(),
    metadata: z.object({}).exactOptional(),
    pdf_hash: z.string().nullable().exactOptional(),
    permanent_download_url: z.string().nullable().exactOptional(),
    processed_at: z.string().nullable().exactOptional(),
    referrer: z.string().nullable().exactOptional(),
    source: z.string().nullable().exactOptional(),
    state: z.enum([
      'pending',
      'processed',
      'invalid_data',
      'error',
      'image_download_failed',
      'image_processing_failed',
      'waiting_for_data_requests',
      'syntax_error',
      'account_suspended',
      'license_revoked',
      'accidental',
    ]),
    template_id: z.string().exactOptional(),
    test: z.boolean(),
    truncated_text: z.object({}).exactOptional(),
  })
  .openapi({ required: ['id', 'state', 'test', 'expired'], title: 'submission' })
  .openapi('Submission')

const ApiTokenBasicSecurityScheme = {
  description: 'Username: API Token ID, Password: API Token Secret',
  scheme: 'basic',
  type: 'http',
}

export const getAuthenticationRoute = createRoute({
  method: 'get',
  path: '/authentication',
  tags: ['PDF'],
  summary: 'Test Authentication',
  operationId: 'testAuthentication',
  responses: {
    200: {
      description: 'authentication succeeded',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.literal('success') })
            .openapi({ required: ['status'], title: 'authentication_success_response' }),
          examples: { response: { value: { status: 'success' } } },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getCombinedSubmissionsRoute = createRoute({
  method: 'get',
  path: '/combined_submissions',
  tags: ['PDF'],
  summary: 'Get a list of all combined submissions',
  operationId: 'listCombinedSubmissions',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Default: 1',
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Default: 50',
            example: 1,
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { maximum: 50, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'enumerate all combined submissions',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  actions: z.array(CombinedSubmissionActionSchema).exactOptional(),
                  download_url: z.string().nullable().exactOptional(),
                  error_message: z.string().nullable().exactOptional(),
                  expired: z.boolean(),
                  expires_at: z.string().nullable().exactOptional(),
                  expires_in: z.int().nullable().exactOptional(),
                  id: z.string(),
                  metadata: z.object({}).exactOptional(),
                  password: z.string().nullable().exactOptional(),
                  pdf_hash: z.string().nullable().exactOptional(),
                  source_pdfs: z.array(
                    z.xor([
                      z
                        .strictObject({
                          id: z.string(),
                          type: z.enum([
                            'submission',
                            'combined_submission',
                            'template',
                            'custom_file',
                          ]),
                        })
                        .openapi({ required: ['type', 'id'] }),
                      z
                        .strictObject({ type: z.literal('url'), url: z.url() })
                        .openapi({ required: ['type', 'url'] }),
                    ]),
                  ),
                  state: z.enum(['pending', 'processed', 'error']),
                  submission_ids: z.array(z.string()),
                })
                .openapi({
                  required: ['id', 'state', 'expired', 'submission_ids', 'source_pdfs'],
                  title: 'combined_submission',
                }),
            )
            .openapi({ title: 'combined_submissions' }),
          examples: {
            response: {
              value: [
                {
                  actions: [],
                  download_url: null,
                  error_message: null,
                  expired: false,
                  expires_at: null,
                  expires_in: null,
                  id: 'com_000000000000000001',
                  metadata: {},
                  password: null,
                  pdf_hash: null,
                  processed_at: null,
                  source_pdfs: [],
                  state: 'pending',
                  submission_ids: [],
                },
                {
                  actions: [],
                  download_url: 'https://example.com/combined_submissions/combined_submission.pdf',
                  error_message: null,
                  expired: false,
                  expires_at: null,
                  expires_in: null,
                  id: 'com_000000000000000002',
                  metadata: {},
                  password: null,
                  pdf_hash: null,
                  processed_at: '2023-01-05T14:00:00Z',
                  source_pdfs: [],
                  state: 'processed',
                  submission_ids: [],
                },
                {
                  actions: [],
                  download_url: null,
                  error_message: 'Something went wrong',
                  expired: false,
                  expires_at: null,
                  expires_in: 123,
                  id: 'com_000000000000000003',
                  metadata: {},
                  password: null,
                  pdf_hash: null,
                  processed_at: null,
                  source_pdfs: [],
                  state: 'error',
                  submission_ids: [],
                },
                {
                  actions: [],
                  download_url: null,
                  error_message: null,
                  expired: true,
                  expires_at: '2023-01-05T14:05:00Z',
                  expires_in: 345,
                  id: 'com_000000000000000004',
                  metadata: {},
                  password: null,
                  pdf_hash: null,
                  processed_at: '2023-01-05T14:00:00Z',
                  source_pdfs: [],
                  state: 'processed',
                  submission_ids: [],
                },
              ],
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postCombinedSubmissionsRoute = createRoute({
  method: 'post',
  path: '/combined_submissions',
  tags: ['PDF'],
  summary: 'Merge generated PDFs together',
  operationId: 'combineSubmissions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expires_in: z.int().exactOptional(),
              metadata: z.object({}).exactOptional(),
              password: z.string().exactOptional(),
              submission_ids: z.array(z.string()),
              test: z.boolean().exactOptional(),
            })
            .openapi({
              example: {
                expires_in: 300,
                metadata: { bar: 'baz', foo: 123 },
                password: 'p@ssword',
                submission_ids: ['sub_000000000000000001', 'sub_000000000000000002'],
              },
              required: ['submission_ids'],
              title: 'combined_submission_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'combined submission created',
      content: {
        'application/json': {
          schema: z
            .object({
              combined_submission: z
                .object({
                  actions: z.array(CombinedSubmissionActionSchema).exactOptional(),
                  download_url: z.string().nullable().exactOptional(),
                  error_message: z.string().nullable().exactOptional(),
                  expired: z.boolean(),
                  expires_at: z.string().nullable().exactOptional(),
                  expires_in: z.int().nullable().exactOptional(),
                  id: z.string(),
                  metadata: z.object({}).exactOptional(),
                  password: z.string().nullable().exactOptional(),
                  pdf_hash: z.string().nullable().exactOptional(),
                  source_pdfs: z.array(
                    z.xor([
                      z
                        .strictObject({
                          id: z.string(),
                          type: z.enum([
                            'submission',
                            'combined_submission',
                            'template',
                            'custom_file',
                          ]),
                        })
                        .openapi({ required: ['type', 'id'] }),
                      z
                        .strictObject({ type: z.literal('url'), url: z.url() })
                        .openapi({ required: ['type', 'url'] }),
                    ]),
                  ),
                  state: z.enum(['pending', 'processed', 'error']),
                  submission_ids: z.array(z.string()),
                })
                .openapi({
                  required: ['id', 'state', 'expired', 'submission_ids', 'source_pdfs'],
                  title: 'combined_submission',
                }),
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({
              required: ['status', 'combined_submission'],
              title: 'create_combined_submission_response',
            }),
          examples: {
            response: {
              value: {
                combined_submission: {
                  actions: [],
                  download_url: null,
                  error_message: null,
                  expired: false,
                  expires_at: null,
                  expires_in: 300,
                  id: 'com_000000000000000001',
                  metadata: { bar: 'baz', foo: 123 },
                  password: 'p@ssword',
                  pdf_hash: null,
                  processed_at: null,
                  source_pdfs: [],
                  state: 'pending',
                  submission_ids: ['sub_000000000000000001', 'sub_000000000000000002'],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'invalid JSON',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error:
                  'There was a problem with the JSON you submitted: unexpected character at line 1, column 37 in \'{ "submission_ids": ["123", "345"], metadata: { "user_id": "@#)(*%$)@(#*%@&%" }}',
                status: 'error',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    422: {
      description: 'invalid request',
      content: {
        'application/json': {
          schema: InvalidRequestSchema,
          examples: {
            response: {
              value: {
                errors: ['source_pdfs: Could not find Submission with ID: MISSING_ID'],
                status: 'error',
              },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getCombinedSubmissionsCombinedSubmissionIdRoute = createRoute({
  method: 'get',
  path: '/combined_submissions/{combined_submission_id}',
  tags: ['PDF'],
  summary: 'Check the status of a combined submission (merged PDFs)',
  operationId: 'getCombinedSubmission',
  request: {
    params: z.object({
      combined_submission_id: z
        .string()
        .openapi({
          param: {
            example: 'com_000000000000000001',
            in: 'path',
            name: 'combined_submission_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'processed combined submission found',
      content: {
        'application/json': {
          schema: z
            .object({
              actions: z.array(CombinedSubmissionActionSchema).exactOptional(),
              download_url: z.string().nullable().exactOptional(),
              error_message: z.string().nullable().exactOptional(),
              expired: z.boolean(),
              expires_at: z.string().nullable().exactOptional(),
              expires_in: z.int().nullable().exactOptional(),
              id: z.string(),
              metadata: z.object({}).exactOptional(),
              password: z.string().nullable().exactOptional(),
              pdf_hash: z.string().nullable().exactOptional(),
              source_pdfs: z.array(
                z.xor([
                  z
                    .strictObject({
                      id: z.string(),
                      type: z.enum([
                        'submission',
                        'combined_submission',
                        'template',
                        'custom_file',
                      ]),
                    })
                    .openapi({ required: ['type', 'id'] }),
                  z
                    .strictObject({ type: z.literal('url'), url: z.url() })
                    .openapi({ required: ['type', 'url'] }),
                ]),
              ),
              state: z.enum(['pending', 'processed', 'error']),
              submission_ids: z.array(z.string()),
            })
            .openapi({
              required: ['id', 'state', 'expired', 'submission_ids', 'source_pdfs'],
              title: 'combined_submission',
            }),
          examples: {
            response: {
              value: {
                actions: [
                  {
                    action_category: 'file_upload',
                    action_type: 'aws_s3_upload',
                    id: 'csa_000000000000000001',
                    integration_id: 'aci_000000000000000001',
                    result_data: {
                      s3_bucket: 'docspring-custom-s3-test',
                      s3_key: 'acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                      s3_region: 'us-east-1',
                      s3_url:
                        'https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                    },
                    state: 'processed',
                  },
                ],
                download_url: 'https://example.com/combined_submissions/combined_submission.pdf',
                error_message: null,
                expired: false,
                expires_at: '2018-10-20T13:05:00Z',
                expires_in: 300,
                id: 'com_000000000000000001',
                metadata: { qux: 'abc', user_id: 42 },
                password: 'p@ssword',
                pdf_hash: '12342342471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                processed_at: '2020-05-14T02:00:00Z',
                source_pdfs: [],
                state: 'processed',
                submission_ids: ['sub_000000000000000001', 'sub_000000000000000002'],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'combined submission not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error: 'Combined submission not found.', status: 'error' } },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const deleteCombinedSubmissionsCombinedSubmissionIdRoute = createRoute({
  method: 'delete',
  path: '/combined_submissions/{combined_submission_id}',
  tags: ['PDF'],
  summary: 'Expire a combined submission',
  operationId: 'expireCombinedSubmission',
  request: {
    params: z.object({
      combined_submission_id: z
        .string()
        .openapi({
          param: {
            example: 'com_000000000000000001',
            in: 'path',
            name: 'combined_submission_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'submission was expired',
      content: {
        'application/json': {
          schema: z
            .object({
              actions: z.array(CombinedSubmissionActionSchema).exactOptional(),
              download_url: z.string().nullable().exactOptional(),
              error_message: z.string().nullable().exactOptional(),
              expired: z.boolean(),
              expires_at: z.string().nullable().exactOptional(),
              expires_in: z.int().nullable().exactOptional(),
              id: z.string(),
              metadata: z.object({}).exactOptional(),
              password: z.string().nullable().exactOptional(),
              pdf_hash: z.string().nullable().exactOptional(),
              source_pdfs: z.array(
                z.xor([
                  z
                    .strictObject({
                      id: z.string(),
                      type: z.enum([
                        'submission',
                        'combined_submission',
                        'template',
                        'custom_file',
                      ]),
                    })
                    .openapi({ required: ['type', 'id'] }),
                  z
                    .strictObject({ type: z.literal('url'), url: z.url() })
                    .openapi({ required: ['type', 'url'] }),
                ]),
              ),
              state: z.enum(['pending', 'processed', 'error']),
              submission_ids: z.array(z.string()),
            })
            .openapi({
              required: ['id', 'state', 'expired', 'submission_ids', 'source_pdfs'],
              title: 'combined_submission',
            }),
          examples: {
            response: {
              value: {
                actions: [
                  {
                    action_category: 'file_upload',
                    action_type: 'aws_s3_upload',
                    id: 'csa_000000000000000001',
                    integration_id: 'aci_000000000000000001',
                    result_data: {
                      s3_bucket: 'docspring-custom-s3-test',
                      s3_key: 'acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                      s3_region: 'us-east-1',
                      s3_url:
                        'https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                    },
                    state: 'processed',
                  },
                ],
                download_url: null,
                error_message: null,
                expired: true,
                expires_at: '2018-10-20T13:00:00Z',
                expires_in: 300,
                id: 'com_000000000000000001',
                metadata: { qux: 'abc', user_id: 42 },
                password: 'p@ssword',
                pdf_hash: '12342342471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                processed_at: '2020-05-14T02:00:00Z',
                source_pdfs: [],
                state: 'processed',
                submission_ids: ['sub_000000000000000001', 'sub_000000000000000002'],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    403: {
      description: 'test API token used',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error: 'You must use a live API token to expire a combined submission.',
                status: 'error',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'combined submission not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error: 'Combined submission not found.', status: 'error' } },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postCombinedSubmissionsV2Route = createRoute({
  method: 'post',
  path: '/combined_submissions?v=2',
  tags: ['PDF'],
  summary: 'Merge submission PDFs, template PDFs, or custom files',
  operationId: 'combinePdfs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({
              delete_custom_files: z.boolean().exactOptional(),
              expires_in: z.int().exactOptional(),
              metadata: z.object({}).exactOptional(),
              password: z.string().exactOptional(),
              source_pdfs: z.array(
                z.xor([
                  z
                    .strictObject({
                      id: z.string(),
                      type: z.enum([
                        'submission',
                        'combined_submission',
                        'template',
                        'custom_file',
                      ]),
                    })
                    .openapi({ required: ['type', 'id'] }),
                  z
                    .strictObject({ type: z.literal('url'), url: z.url() })
                    .openapi({ required: ['type', 'url'] }),
                ]),
              ),
              test: z.boolean().exactOptional(),
            })
            .openapi({
              example: {
                delete_custom_files: true,
                expires_in: 300,
                metadata: { bar: 'baz', foo: 123 },
                source_pdfs: [
                  { id: 'sub_000000000000000001', type: 'submission' },
                  { id: 'tpl_000000000000000001', type: 'template' },
                  { id: 'sub_000000000000000002', type: 'submission' },
                  { id: 'cfi_0000000000000000000000001', type: 'custom_file' },
                  { id: 'com_000000000000000001', type: 'combined_submission' },
                  { type: 'url', url: 'http://example.com/test-pdf.pdf' },
                ],
              },
              required: ['source_pdfs'],
              title: 'combine_pdfs_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'combined submission created',
      content: {
        'application/json': {
          schema: z
            .object({
              combined_submission: z
                .object({
                  actions: z.array(CombinedSubmissionActionSchema).exactOptional(),
                  download_url: z.string().nullable().exactOptional(),
                  error_message: z.string().nullable().exactOptional(),
                  expired: z.boolean(),
                  expires_at: z.string().nullable().exactOptional(),
                  expires_in: z.int().nullable().exactOptional(),
                  id: z.string(),
                  metadata: z.object({}).exactOptional(),
                  password: z.string().nullable().exactOptional(),
                  pdf_hash: z.string().nullable().exactOptional(),
                  source_pdfs: z.array(
                    z.xor([
                      z
                        .strictObject({
                          id: z.string(),
                          type: z.enum([
                            'submission',
                            'combined_submission',
                            'template',
                            'custom_file',
                          ]),
                        })
                        .openapi({ required: ['type', 'id'] }),
                      z
                        .strictObject({ type: z.literal('url'), url: z.url() })
                        .openapi({ required: ['type', 'url'] }),
                    ]),
                  ),
                  state: z.enum(['pending', 'processed', 'error']),
                  submission_ids: z.array(z.string()),
                })
                .openapi({
                  required: ['id', 'state', 'expired', 'submission_ids', 'source_pdfs'],
                  title: 'combined_submission',
                }),
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({
              required: ['status', 'combined_submission'],
              title: 'create_combined_submission_response',
            }),
          examples: {
            response: {
              value: {
                combined_submission: {
                  actions: [
                    {
                      action_category: 'file_upload',
                      action_type: 'aws_s3_upload',
                      id: 'csa_000000000000000002',
                      integration_id: 'aci_000000000000000001',
                      result_data: {
                        s3_bucket: 'docspring-custom-s3-test',
                        s3_key: 'acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                        s3_region: 'us-east-1',
                        s3_url:
                          'https://docspring-custom-s3-test.s3.amazonaws.com/acc_1234/2018/combined_submissions/20181005090010-com_1234.pdf',
                      },
                      state: 'processed',
                    },
                  ],
                  download_url: null,
                  error_message: null,
                  expired: false,
                  expires_at: null,
                  expires_in: 300,
                  id: 'com_000000000000000002',
                  metadata: { bar: 'baz', foo: 123 },
                  password: null,
                  pdf_hash: null,
                  processed_at: null,
                  source_pdfs: [
                    { id: 'sub_000000000000000001', type: 'submission' },
                    { id: 'tpl_000000000000000001', type: 'template' },
                    { id: 'sub_000000000000000002', type: 'submission' },
                    { id: 'cfi_0000000000000000000000001', type: 'custom_file' },
                    { id: 'com_000000000000000001', type: 'combined_submission' },
                    { type: 'url', url: 'http://example.com/test-pdf.pdf' },
                  ],
                  state: 'pending',
                  submission_ids: ['sub_000000000000000001', 'sub_000000000000000002'],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'invalid JSON',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error:
                  'There was a problem with the JSON you submitted: unexpected character at line 1, column 34 in \'{ "source_pdfs": ["123", "345"], metadata: { "user_id": "@#*&%)(@*#%&(@#!" }}',
                status: 'error',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    422: {
      description: 'invalid request',
      content: {
        'application/json': {
          schema: InvalidRequestSchema,
          examples: {
            response: {
              value: {
                errors: [
                  'source_pdfs: Could not find Submission with ID: MISSING_SUBMISSION_ID',
                  'source_pdfs: Template document is not processed: tpl_000000000000000001 (state: pending)',
                  'source_pdfs: Could not find Template with ID: MISSING_TEMPLATE_ID',
                  'source_pdfs: Could not find Custom File with ID: MISSING_CUSTOM_FILE_ID',
                  'source_pdfs: Could not find Combined Submission with ID: MISSING_COMBINED_SUBMISSION_ID',
                ],
                status: 'error',
              },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postCustomFilesRoute = createRoute({
  method: 'post',
  path: '/custom_files',
  tags: ['PDF'],
  summary: 'Create a new custom file from a cached presign upload',
  operationId: 'createCustomFileFromUpload',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ cache_id: z.string().min(1) })
            .openapi({
              example: { cache_id: '00000000000000001.pdf' },
              required: ['cache_id'],
              title: 'create_custom_file_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'returns the custom file',
      content: {
        'application/json': {
          schema: z
            .object({
              custom_file: z
                .strictObject({ id: z.string(), url: z.string() })
                .openapi({ required: ['id', 'url'], title: 'custom_file' }),
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({ required: ['status', 'custom_file'], title: 'create_custom_file_response' }),
          examples: {
            response: {
              value: {
                custom_file: {
                  id: 'cfi_000000000000000001',
                  url: '/uploads/test/store/acc_000000000000000001/custom_files/cfi_000000000000000001.pdf',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getDataRequestsDataRequestIdRoute = createRoute({
  method: 'get',
  path: '/data_requests/{data_request_id}',
  tags: ['PDF'],
  summary: 'Look up a submission data request',
  operationId: 'getDataRequest',
  request: {
    params: z.object({
      data_request_id: z
        .string()
        .openapi({
          param: {
            example: 'drq_000000000000000001',
            in: 'path',
            name: 'data_request_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'completed submission data request found',
      content: {
        'application/json': {
          schema: SubmissionDataRequestSchema,
          examples: {
            response: {
              value: {
                auth_phone_number_hash:
                  'fdcc3985b0698d655137019b1e776171081369f0aad125b8c7f57af2b8225490',
                auth_provider: null,
                auth_second_factor_type: 'phone_number',
                auth_session_id_hash: null,
                auth_session_started_at: '2018-10-23T13:00:00Z',
                auth_type: 'password',
                auth_user_id_hash:
                  '8ae0e445664ca53407906db8638d8ba07a2383f656383a4427bed1ab645ca29a',
                auth_username_hash:
                  'b7c141423f7030a6a771563ee0731192ea871146653a3d0cf8f8b78ca8f9699b',
                completed_at: null,
                data: { last_name: 'Smithers' },
                email: 'jdoe@example.com',
                fields: ['last_name'],
                id: 'drq_000000000000000001',
                ip_address: '1.1.1.1',
                metadata: { user_id: 42 },
                name: 'John Doe',
                order: 1,
                sort_order: 0,
                state: 'pending',
                submission_id: 'sub_000000000000000001',
                user_agent:
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
                viewed_at: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
    404: {
      description: 'submission data request not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Data request not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const putDataRequestsDataRequestIdRoute = createRoute({
  method: 'put',
  path: '/data_requests/{data_request_id}',
  tags: ['PDF'],
  summary: 'Update a submission data request',
  operationId: 'updateDataRequest',
  request: {
    params: z.object({
      data_request_id: z
        .string()
        .openapi({
          param: {
            example: 'drq_000000000000000001',
            in: 'path',
            name: 'data_request_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              auth_phone_number_hash: z.string().nullable().exactOptional(),
              auth_provider: z.string().nullable().exactOptional(),
              auth_second_factor_type: z
                .enum([
                  'none',
                  'phone_number',
                  'totp',
                  'mobile_push',
                  'security_key',
                  'fingerprint',
                ])
                .exactOptional(),
              auth_session_id_hash: z.string().nullable().exactOptional(),
              auth_session_started_at: z.string().nullable().exactOptional(),
              auth_type: z
                .enum(['none', 'password', 'oauth', 'email_link', 'phone_number', 'ldap', 'saml'])
                .exactOptional(),
              auth_user_id_hash: z.string().nullable().exactOptional(),
              auth_username_hash: z.string().nullable().exactOptional(),
              email: z.string().nullable().exactOptional(),
              fields: z.array(z.string()).exactOptional(),
              metadata: z.object({}).exactOptional(),
              name: z.string().nullable().exactOptional(),
              order: z.int().exactOptional(),
            })
            .openapi({
              example: {
                auth_provider: 'google',
                auth_session_id_hash:
                  '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
                auth_session_started_at: '2018-10-23 09:00:00 -0400',
                auth_type: 'oauth',
                metadata: { user_id: 123 },
              },
              title: 'update_submission_data_request_data',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'submission data request updated',
      content: {
        'application/json': {
          schema: z
            .object({
              data_request: SubmissionDataRequestSchema,
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({
              required: ['status', 'data_request'],
              title: 'update_data_request_response',
            }),
          examples: {
            response: {
              value: {
                data_request: {
                  auth_phone_number_hash: null,
                  auth_provider: 'google',
                  auth_second_factor_type: 'none',
                  auth_session_id_hash:
                    '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92',
                  auth_session_started_at: '2018-10-23T13:00:00Z',
                  auth_type: 'oauth',
                  auth_user_id_hash: null,
                  auth_username_hash: null,
                  completed_at: null,
                  data: { last_name: 'Smithers' },
                  email: 'jdoe@example.com',
                  fields: ['last_name'],
                  id: 'drq_000000000000000001',
                  ip_address: '1.1.1.1',
                  metadata: { user_id: 123 },
                  name: 'John Doe',
                  order: 1,
                  sort_order: 0,
                  state: 'pending',
                  submission_id: 'sub_000000000000000001',
                  user_agent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
                  viewed_at: null,
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
    404: {
      description: 'submission data request not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Data request not found.', status: 'error' } } },
        },
      },
    },
    422: {
      description: 'invalid request',
      content: {
        'application/json': {
          schema: InvalidRequestSchema,
          examples: {
            response: {
              value: {
                errors: ['Data requests cannot be updated after they have been completed.'],
                status: 'error',
              },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postDataRequestsDataRequestIdTokensRoute = createRoute({
  method: 'post',
  path: '/data_requests/{data_request_id}/tokens',
  tags: ['PDF'],
  summary: 'Creates a new data request token for form authentication',
  operationId: 'createDataRequestToken',
  request: {
    params: z.object({
      data_request_id: z
        .string()
        .openapi({
          param: {
            example: 'drq_000000000000000001',
            in: 'path',
            name: 'data_request_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'token created',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
              token: z
                .object({
                  data_request_url: z.string(),
                  expires_at: z.string(),
                  id: z.string(),
                  secret: z.string(),
                })
                .openapi({ required: ['id', 'secret', 'expires_at', 'data_request_url'] }),
            })
            .openapi({
              required: ['status', 'token'],
              title: 'create_submission_data_request_token_response',
            }),
          examples: {
            response: {
              value: {
                status: 'success',
                token: {
                  data_request_url:
                    'http://app.docspring.local/data_requests/drq_000000000000000001?token_id=000000000000000001&token_secret=ABCDEF01234567890',
                  expires_at: '2018-10-20T14:00:00Z',
                  id: '000000000000000001',
                  secret: 'ABCDEF01234567890',
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getFoldersIndexRoute = createRoute({
  method: 'get',
  path: '/folders/',
  tags: ['PDF'],
  summary: 'Get a list of all folders',
  operationId: 'listFolders',
  request: {
    query: z.object({
      parent_folder_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter By Folder Id',
            example: 'fld_000000000000000002',
            in: 'query',
            name: 'parent_folder_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'enumerate all folders',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  parent_folder_id: z.string().nullable().exactOptional(),
                  path: z.string().exactOptional(),
                })
                .openapi({ title: 'folder', required: [] }),
            )
            .openapi({ title: 'folders' }),
          examples: {
            response: {
              value: [
                {
                  id: 'fld_000000000000000003',
                  name: 'nested folder 1',
                  parent_folder_id: 'fld_000000000000000002',
                  path: '/Folder 2',
                },
                {
                  id: 'fld_000000000000000002',
                  name: 'Folder 2',
                  parent_folder_id: null,
                  path: '/',
                },
                {
                  id: 'fld_000000000000000001',
                  name: 'Folder 1',
                  parent_folder_id: null,
                  path: '/',
                },
              ],
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postFoldersIndexRoute = createRoute({
  method: 'post',
  path: '/folders/',
  tags: ['PDF'],
  summary: 'Create a folder',
  operationId: 'createFolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              folder: z
                .object({ name: z.string(), parent_folder_id: z.string().exactOptional() })
                .openapi({ required: ['name'] }),
            })
            .openapi({
              example: { folder: { name: 'Folder 3' } },
              required: ['folder'],
              title: 'create_folder_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'folder created inside another folder',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
            })
            .openapi({ title: 'folder', required: [] }),
          examples: {
            response: {
              value: {
                id: 'fld_0000000000000000n1',
                name: 'Folder 3',
                parent_folder_id: null,
                path: '/',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'parent folder doesnt exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'name already exist',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
            })
            .openapi({ title: 'folder', required: [] }),
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const deleteFoldersFolderIdRoute = createRoute({
  method: 'delete',
  path: '/folders/{folder_id}',
  tags: ['PDF'],
  summary: 'Delete a folder',
  operationId: 'deleteFolder',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            example: 'fld_000000000000000001',
            in: 'path',
            name: 'folder_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'folder is empty',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
            })
            .openapi({ title: 'folder', required: [] }),
          examples: {
            response: {
              value: {
                id: 'fld_000000000000000001',
                name: 'Folder 1',
                parent_folder_id: null,
                path: '/',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'folder doesnt exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description: 'folder has contents',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postFoldersFolderIdMoveRoute = createRoute({
  method: 'post',
  path: '/folders/{folder_id}/move',
  tags: ['PDF'],
  summary: 'Move a folder',
  operationId: 'moveFolderToFolder',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            example: 'fld_000000000000000001',
            in: 'path',
            name: 'folder_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ parent_folder_id: z.string().exactOptional() })
            .openapi({
              example: { parent_folder_id: 'fld_000000000000000002' },
              title: 'move_folder_data',
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'move to root folder',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
            })
            .openapi({ title: 'folder', required: [] }),
          examples: {
            response: {
              value: {
                id: 'fld_000000000000000001',
                name: 'Folder 1',
                parent_folder_id: 'fld_000000000000000002',
                path: '/Folder 2',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'parent folder doesnt exist',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postFoldersFolderIdRenameRoute = createRoute({
  method: 'post',
  path: '/folders/{folder_id}/rename',
  tags: ['PDF'],
  summary: 'Rename a folder',
  operationId: 'renameFolder',
  request: {
    params: z.object({
      folder_id: z
        .string()
        .openapi({
          param: {
            example: 'fld_000000000000000001',
            in: 'path',
            name: 'folder_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string() })
            .openapi({
              example: { name: 'Folder 3' },
              required: ['name'],
              title: 'rename_folder_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'successful rename', content: {} },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: { description: 'folder doesnt belong to me' },
    422: { description: 'name already exist' },
  },
  security: [{ api_token_basic: [] }],
})

export const getSubmissionsRoute = createRoute({
  method: 'get',
  path: '/submissions',
  tags: ['PDF'],
  summary: 'List all submissions',
  operationId: 'listSubmissions',
  request: {
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'sub_list_000012',
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: 3,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      created_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '2019-01-01T09:00:00-05:00',
            in: 'query',
            name: 'created_after',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: '2020-01-01T09:00:00-05:00',
            in: 'query',
            name: 'created_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: 'test',
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_data: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'include_data',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'listing submissions',
      content: {
        'application/json': {
          schema: z
            .object({
              limit: z.number(),
              next_cursor: z.string().nullable(),
              submissions: z.array(SubmissionSchema),
            })
            .openapi({
              required: ['submissions', 'limit', 'next_cursor'],
              title: 'list_submissions_response',
            }),
          examples: {
            response: {
              value: {
                limit: 3,
                next_cursor: 'sub_list_000003',
                submissions: [
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000001',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000001/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000001',
                    test: true,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000002',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000002/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000001',
                    test: true,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000003',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000003/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000001',
                    test: true,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'invalid type',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error: "Invalid submission type: 'foo'", status: 'error' } },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postSubmissionsBatchesRoute = createRoute({
  method: 'post',
  path: '/submissions/batches',
  tags: ['PDF'],
  summary: 'Generates multiple PDFs',
  operationId: 'batchGeneratePdfs',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              metadata: z.object({}).exactOptional(),
              submissions: z.array(
                z
                  .object({
                    css: z.string().exactOptional(),
                    data: z.object({}),
                    html: z.string().exactOptional(),
                    metadata: z.object({}).exactOptional(),
                    template_id: z.string().nullable(),
                    test: z.boolean().exactOptional(),
                  })
                  .openapi({
                    required: ['template_id', 'data'],
                    title: 'submission_data_batch_request',
                  }),
              ),
              template_id: z.string().nullable().exactOptional(),
              test: z.boolean().exactOptional(),
            })
            .openapi({
              example: {
                metadata: { job_id: 54321 },
                submissions: [
                  {
                    data: { first_name: 'Johnny', last_name: 'Smith' },
                    metadata: { submission_number: 1 },
                    template_id: 'tpl_000000000000000001',
                    test: false,
                  },
                  {
                    data: { first_name: 'Jane', last_name: 'Doe' },
                    metadata: { submission_number: 2 },
                    template_id: 'tpl_000000000000000001',
                  },
                ],
                template_id: null,
                test: true,
              },
              required: ['submissions'],
              title: 'submission_batch_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'some PDFs with invalid data',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
              submission_batch: z
                .object({
                  completion_percentage: z.int(),
                  error_count: z.int(),
                  id: z.string(),
                  metadata: z.object({}),
                  pending_count: z.int(),
                  processed_at: z.string().nullable(),
                  state: z.enum(['pending', 'processed', 'error']),
                  submissions: z.array(SubmissionSchema).exactOptional(),
                  total_count: z.int(),
                })
                .openapi({
                  required: [
                    'id',
                    'total_count',
                    'pending_count',
                    'error_count',
                    'completion_percentage',
                    'state',
                    'processed_at',
                    'metadata',
                  ],
                  title: 'submission_batch',
                }),
              submissions: z.array(
                z
                  .object({
                    errors: z.array(z.string()).exactOptional(),
                    status: z.enum(['success', 'error', 'valid_but_not_saved']),
                    submission: SubmissionSchema.exactOptional(),
                  })
                  .openapi({
                    required: ['status'],
                    title: 'create_submission_batch_submissions_response',
                  }),
              ),
            })
            .openapi({
              required: ['status', 'submission_batch', 'submissions'],
              title: 'create_submission_batch_response',
            }),
          examples: {
            response: {
              value: {
                status: 'error',
                submission_batch: {
                  completion_percentage: 100,
                  error_count: 1,
                  id: 'sbb_000000000000000001',
                  metadata: { job_id: 54321 },
                  pending_count: 0,
                  processed_at: null,
                  state: 'error',
                  total_count: 2,
                },
                submissions: [
                  { status: 'valid_but_not_saved' },
                  {
                    errors: [
                      "Your submission data did not contain a required property of 'first_name'",
                    ],
                    status: 'error',
                    submission: {
                      actions: [],
                      batch_id: 'sbb_000000000000000001',
                      data_requests: [],
                      download_url: null,
                      editable: null,
                      expired: false,
                      expires_at: null,
                      id: 'sub_000000000000000001',
                      json_schema_errors: [
                        "Your submission data did not contain a required property of 'first_name'",
                      ],
                      metadata: { submission_number: 2 },
                      password: null,
                      pdf_hash: null,
                      permanent_download_url: null,
                      processed_at: null,
                      state: 'invalid_data',
                      template_id: 'tpl_000000000000000001',
                      test: true,
                      truncated_text: {},
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description: 'submissions created',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z.string().exactOptional(),
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
              submission_batch: z
                .object({
                  completion_percentage: z.int(),
                  error_count: z.int(),
                  id: z.string(),
                  metadata: z.object({}),
                  pending_count: z.int(),
                  processed_at: z.string().nullable(),
                  state: z.enum(['pending', 'processed', 'error']),
                  submissions: z.array(SubmissionSchema).exactOptional(),
                  total_count: z.int(),
                })
                .openapi({
                  required: [
                    'id',
                    'total_count',
                    'pending_count',
                    'error_count',
                    'completion_percentage',
                    'state',
                    'processed_at',
                    'metadata',
                  ],
                  title: 'submission_batch',
                }),
              submissions: z.array(
                z
                  .object({
                    errors: z.array(z.string()).exactOptional(),
                    status: z.enum(['success', 'error', 'valid_but_not_saved']),
                    submission: SubmissionSchema.exactOptional(),
                  })
                  .openapi({
                    required: ['status'],
                    title: 'create_submission_batch_submissions_response',
                  }),
              ),
            })
            .openapi({
              required: ['status', 'submission_batch', 'submissions'],
              title: 'create_submission_batch_response',
            }),
          examples: {
            response: {
              value: {
                status: 'success',
                submission_batch: {
                  completion_percentage: 0,
                  error_count: 0,
                  id: 'sbb_000000000000000001',
                  metadata: { job_id: 54321 },
                  pending_count: 2,
                  processed_at: null,
                  state: 'pending',
                  total_count: 2,
                },
                submissions: [
                  {
                    status: 'success',
                    submission: {
                      actions: [],
                      batch_id: 'sbb_000000000000000001',
                      data_requests: [],
                      download_url: null,
                      editable: null,
                      expired: false,
                      expires_at: null,
                      id: 'sub_000000000000000001',
                      json_schema_errors: [],
                      metadata: { submission_number: 1 },
                      password: null,
                      pdf_hash: null,
                      permanent_download_url: null,
                      processed_at: null,
                      state: 'pending',
                      template_id: 'tpl_000000000000000001',
                      test: false,
                      truncated_text: {},
                    },
                  },
                  {
                    status: 'success',
                    submission: {
                      actions: [],
                      batch_id: 'sbb_000000000000000001',
                      data_requests: [],
                      download_url: null,
                      editable: null,
                      expired: false,
                      expires_at: null,
                      id: 'sub_000000000000000002',
                      json_schema_errors: [],
                      metadata: { submission_number: 2 },
                      password: null,
                      pdf_hash: null,
                      permanent_download_url: null,
                      processed_at: null,
                      state: 'pending',
                      template_id: 'tpl_000000000000000001',
                      test: true,
                      truncated_text: {},
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'invalid JSON',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error:
                  'There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in \'{ "first_name": "John", last_name: "Smith" }',
                status: 'error',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getSubmissionsBatchesSubmissionBatchIdRoute = createRoute({
  method: 'get',
  path: '/submissions/batches/{submission_batch_id}',
  tags: ['PDF'],
  summary: 'Check the status of a submission batch job',
  operationId: 'getSubmissionBatch',
  request: {
    params: z.object({
      submission_batch_id: z
        .string()
        .openapi({
          param: {
            example: 'sbb_000000000000000001',
            in: 'path',
            name: 'submission_batch_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_submissions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'include_submissions',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'processed submission batch found',
      content: {
        'application/json': {
          schema: z
            .object({
              completion_percentage: z.int(),
              error_count: z.int(),
              id: z.string(),
              metadata: z.object({}),
              pending_count: z.int(),
              processed_at: z.string().nullable(),
              state: z.enum(['pending', 'processed', 'error']),
              submissions: z.array(SubmissionSchema).exactOptional(),
              total_count: z.int(),
            })
            .openapi({
              required: [
                'id',
                'total_count',
                'pending_count',
                'error_count',
                'completion_percentage',
                'state',
                'processed_at',
                'metadata',
              ],
              title: 'submission_batch',
            }),
          examples: {
            response: {
              value: {
                completion_percentage: 100,
                error_count: 2,
                id: 'sbb_000000000000000001',
                metadata: { qux: 'abc' },
                pending_count: 0,
                processed_at: null,
                state: 'error',
                submissions: [
                  {
                    actions: [],
                    batch_id: 'sbb_000000000000000001',
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000001',
                    json_schema_errors: [],
                    metadata: {},
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_000000000000000001/download',
                    processed_at: null,
                    state: 'processed',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                  {
                    actions: [],
                    batch_id: 'sbb_000000000000000001',
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000002',
                    json_schema_errors: [],
                    metadata: {},
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_000000000000000002/download',
                    processed_at: null,
                    state: 'processed',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                ],
                total_count: 10,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
    404: {
      description: 'submission batch not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: { value: { error: 'Submission batch not found.', status: 'error' } },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getSubmissionsSubmissionIdRoute = createRoute({
  method: 'get',
  path: '/submissions/{submission_id}',
  tags: ['PDF'],
  summary: 'Check the status of a PDF',
  operationId: 'getSubmission',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            example: 'sub_000000000000000001',
            in: 'path',
            name: 'submission_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      include_data: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'include_data',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'processed submission found',
      content: {
        'application/json': {
          schema: SubmissionSchema,
          examples: {
            response: {
              value: {
                actions: [
                  {
                    action_category: 'file_upload',
                    action_type: 'aws_s3_upload',
                    id: 'sba_000000000000000001',
                    integration_id: 'aci_000000000000000001',
                    result_data: {
                      s3_bucket: 'docspring-custom-s3-test',
                      s3_key: 'templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf',
                      s3_region: 'us-east-1',
                      s3_url:
                        'https://docspring-custom-s3-test.s3.amazonaws.com/templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf',
                    },
                    state: 'processed',
                  },
                ],
                batch_id: null,
                data: {
                  first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                  last_name: 'Smith',
                  phone_number: '+11234567890',
                },
                data_requests: [],
                download_url: 'https://example.com/submissions/submission.pdf',
                editable: false,
                expired: false,
                expires_at: '2018-10-27T13:00:00Z',
                id: 'sub_000000000000000001',
                json_schema_errors: [],
                metadata: { qux: 'abc', user_id: 42 },
                password: null,
                pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                permanent_download_url:
                  'http://app.docspring.local/submissions/sub_000000000000000001/download',
                processed_at: '2020-05-14T02:00:00Z',
                referrer: null,
                source: 'api',
                state: 'processed',
                template_id: 'tpl_000000000000000001',
                test: true,
                truncated_text: { first_name: ['F. Scott Fitzgerald'] },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized', status: 'error' } } },
        },
      },
    },
    404: {
      description: 'submission not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Submission not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const deleteSubmissionsSubmissionIdRoute = createRoute({
  method: 'delete',
  path: '/submissions/{submission_id}',
  tags: ['PDF'],
  summary: 'Expire a PDF submission',
  operationId: 'expireSubmission',
  request: {
    params: z.object({
      submission_id: z
        .string()
        .openapi({
          param: {
            example: 'sub_000000000000000001',
            in: 'path',
            name: 'submission_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'submission was expired',
      content: {
        'application/json': {
          schema: SubmissionSchema,
          examples: {
            response: {
              value: {
                actions: [
                  {
                    action_category: 'file_upload',
                    action_type: 'aws_s3_upload',
                    id: 'sba_000000000000000001',
                    integration_id: 'aci_000000000000000001',
                    result_data: {
                      s3_bucket: 'docspring-custom-s3-test',
                      s3_key: 'templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf',
                      s3_region: 'us-east-1',
                      s3_url:
                        'https://docspring-custom-s3-test.s3.amazonaws.com/templates/tpl_eGc5CmFbPnCCmerqsx/sub_gzYpKDYFqEHxzca4kK.pdf',
                    },
                    state: 'processed',
                  },
                ],
                batch_id: null,
                data_requests: [],
                download_url: null,
                editable: false,
                expired: true,
                expires_at: '2018-10-20T13:00:00Z',
                id: 'sub_000000000000000001',
                json_schema_errors: [],
                metadata: { qux: 'abc', user_id: 42 },
                password: null,
                pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                permanent_download_url: null,
                processed_at: '2020-05-14T02:00:00Z',
                state: 'processed',
                template_id: 'tpl_000000000000000001',
                test: true,
                truncated_text: { first_name: ['F. Scott Fitzgerald'] },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
    403: {
      description: 'test API token used',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error: 'You must use a live API token to expire a submission.',
                status: 'error',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'submission not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Submission not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getTemplatesRoute = createRoute({
  method: 'get',
  path: '/templates',
  tags: ['PDF'],
  summary: 'Get a list of all templates',
  operationId: 'listTemplates',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search By Name',
            example: '2',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      parent_folder_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter By Folder Id',
            example: 'fld_000000000000000001',
            in: 'query',
            name: 'parent_folder_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Default: 1',
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { minimum: 1, type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Default: 50',
            example: 1,
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { maximum: 50, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'enumerate all templates',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  allow_additional_properties: z.boolean(),
                  description: z.string().nullable(),
                  document_url: z.string().nullable(),
                  editable_submissions: z.boolean(),
                  expiration_interval: z.enum(['minutes', 'hours', 'days']),
                  expire_after: z.number(),
                  expire_submissions: z.boolean(),
                  id: z.string(),
                  locked: z.boolean(),
                  name: z.string().nullable(),
                  page_dimensions: z.array(z.array(z.number()).length(2)).nullable(),
                  parent_folder_id: z.string().nullable(),
                  path: z.string(),
                  permanent_document_url: z.string().nullable(),
                  public_submissions: z.boolean(),
                  public_web_form: z.boolean(),
                  redirect_url: z.string().nullable(),
                  slack_webhook_url: z.string().nullable(),
                  template_type: z.string(),
                  webhook_url: z.string().nullable(),
                })
                .openapi({
                  required: [
                    'allow_additional_properties',
                    'description',
                    'document_url',
                    'editable_submissions',
                    'expiration_interval',
                    'expire_after',
                    'expire_submissions',
                    'id',
                    'locked',
                    'name',
                    'page_dimensions',
                    'parent_folder_id',
                    'path',
                    'permanent_document_url',
                    'public_submissions',
                    'public_web_form',
                    'redirect_url',
                    'slack_webhook_url',
                    'template_type',
                    'webhook_url',
                  ],
                  title: 'template',
                }),
            )
            .openapi({ title: 'templates' }),
          examples: {
            response: {
              value: [
                {
                  allow_additional_properties: false,
                  description: null,
                  document_filename: 'test-document.pdf',
                  document_processed: true,
                  document_state: 'pending',
                  document_url: '/uploads/test/store/templates/test/test-document.pdf',
                  editable_submissions: false,
                  expiration_interval: 'days',
                  expire_after: 7,
                  expire_submissions: true,
                  id: 'tpl_000000000000000011',
                  locked: false,
                  name: 'Sub Template 1',
                  page_count: 3,
                  page_dimensions: [
                    [612, 792],
                    [792, 612],
                    [612, 792],
                  ],
                  parent_folder_id: 'fld_000000000000000001',
                  path: '/Folder',
                  permanent_document_url:
                    'http://app.docspring.local/templates/tpl_000000000000000011/original_pdf?token=123456789abcdef',
                  public_submissions: false,
                  public_web_form: false,
                  redirect_url: null,
                  slack_webhook_url: null,
                  template_type: 'pdf',
                  webhook_url: null,
                },
                {
                  allow_additional_properties: false,
                  description: null,
                  document_filename: null,
                  document_processed: false,
                  document_state: 'pending',
                  document_url: null,
                  editable_submissions: false,
                  expiration_interval: 'days',
                  expire_after: 7,
                  expire_submissions: true,
                  id: 'tpl_000000000000000003',
                  locked: false,
                  name: 'Template 3',
                  page_count: 1,
                  page_dimensions: null,
                  parent_folder_id: null,
                  path: '/',
                  permanent_document_url: null,
                  public_submissions: false,
                  public_web_form: false,
                  redirect_url: null,
                  slack_webhook_url: null,
                  template_type: 'html',
                  webhook_url: null,
                },
                {
                  allow_additional_properties: false,
                  description: null,
                  document_filename: 'test-document.pdf',
                  document_processed: true,
                  document_state: 'pending',
                  document_url: '/uploads/test/store/templates/test/test-document.pdf',
                  editable_submissions: false,
                  expiration_interval: 'days',
                  expire_after: 7,
                  expire_submissions: true,
                  id: 'tpl_000000000000000002',
                  locked: false,
                  name: 'Template 2',
                  page_count: 3,
                  page_dimensions: [
                    [612, 792],
                    [792, 612],
                    [612, 792],
                  ],
                  parent_folder_id: null,
                  path: '/',
                  permanent_document_url:
                    'http://app.docspring.local/templates/tpl_000000000000000002/original_pdf?token=123456789abcdef',
                  public_submissions: false,
                  public_web_form: false,
                  redirect_url: null,
                  slack_webhook_url: null,
                  template_type: 'pdf',
                  webhook_url: null,
                },
                {
                  allow_additional_properties: false,
                  description: null,
                  document_filename: 'blank_pdf.pdf',
                  document_processed: true,
                  document_state: 'processed',
                  document_url:
                    '/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf',
                  editable_submissions: false,
                  expiration_interval: 'days',
                  expire_after: 7,
                  expire_submissions: true,
                  id: 'tpl_000000000000000001',
                  locked: false,
                  name: 'Template 1',
                  page_count: 1,
                  page_dimensions: [[612, 792]],
                  parent_folder_id: null,
                  path: '/',
                  permanent_document_url:
                    'http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef',
                  public_submissions: false,
                  public_web_form: false,
                  redirect_url: null,
                  slack_webhook_url: null,
                  template_type: 'pdf',
                  webhook_url: null,
                },
              ],
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'filter templates by invalid folder id',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesRoute = createRoute({
  method: 'post',
  path: '/templates',
  tags: ['PDF'],
  summary: 'Create a new PDF template with a form POST file upload',
  operationId: 'createPDFTemplate',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              'template[document]': z
                .file()
                .openapi({ type: 'string', format: 'binary', example: '<Uploaded File>' }),
              'template[name]': z.string().openapi({ example: 'Test Template' }),
              'template[parent_folder_id]': z
                .string()
                .exactOptional()
                .openapi({ example: 'fld_000000000000000001' }),
            })
            .openapi({ required: ['template[document]', 'template[name]'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'returns a pending template',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
              expire_after: z.number().exactOptional(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'description',
                'template_type',
                'public_web_form',
                'public_submissions',
                'expire_submissions',
                'allow_additional_properties',
                'editable_submissions',
                'locked',
                'page_dimensions',
                'webhook_url',
                'slack_webhook_url',
                'redirect_url',
              ],
              title: 'pending_template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: null,
                document_filename: 'fw8ben.pdf',
                document_processed: false,
                document_state: 'pending',
                document_url: '/cache/cached_upload.pdf',
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: false,
                id: 'tpl_000000000000000004',
                locked: false,
                name: 'Test Template',
                page_count: 0,
                page_dimensions: null,
                parent_folder_id: 'fld_000000000000000001',
                path: '/Folder',
                permanent_document_url: null,
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/templates/{template_id}',
  tags: ['PDF'],
  summary: 'Check the status of an uploaded template',
  operationId: 'getTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'template found',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              document_url: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']),
              expire_after: z.number(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              page_dimensions: z.array(z.array(z.number()).length(2)).nullable(),
              parent_folder_id: z.string().nullable(),
              path: z.string(),
              permanent_document_url: z.string().nullable(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'allow_additional_properties',
                'description',
                'document_url',
                'editable_submissions',
                'expiration_interval',
                'expire_after',
                'expire_submissions',
                'id',
                'locked',
                'name',
                'page_dimensions',
                'parent_folder_id',
                'path',
                'permanent_document_url',
                'public_submissions',
                'public_web_form',
                'redirect_url',
                'slack_webhook_url',
                'template_type',
                'webhook_url',
              ],
              title: 'template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: null,
                document_filename: 'blank_pdf.pdf',
                document_processed: true,
                document_state: 'processed',
                document_url:
                  '/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf',
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: true,
                id: 'tpl_000000000000000001',
                locked: false,
                name: 'Template 1',
                page_count: 1,
                page_dimensions: [[612, 792]],
                parent_folder_id: null,
                path: '/',
                permanent_document_url:
                  'http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef',
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'template not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Template not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const putTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/templates/{template_id}',
  tags: ['PDF'],
  summary: 'Update a Template',
  operationId: 'updateTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000003',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template: z
                .object({
                  allow_additional_properties: z.boolean().exactOptional(),
                  description: z.string().nullable().exactOptional(),
                  editable_submissions: z.boolean().exactOptional(),
                  expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
                  expire_after: z.number().exactOptional(),
                  expire_submissions: z.boolean().exactOptional(),
                  footer_html: z.string().nullable().exactOptional(),
                  header_html: z.string().nullable().exactOptional(),
                  html: z.string().nullable().exactOptional(),
                  name: z.string().nullable().exactOptional(),
                  public_submissions: z.boolean().exactOptional(),
                  public_web_form: z.boolean().exactOptional(),
                  redirect_url: z.string().nullable().exactOptional(),
                  scss: z.string().nullable().exactOptional(),
                  slack_webhook_url: z.string().nullable().exactOptional(),
                  webhook_url: z.string().nullable().exactOptional(),
                })
                .openapi({ title: 'template_data', required: [] }),
            })
            .openapi({
              example: {
                template: {
                  footer_html: 'updated footer',
                  header_html: 'updated header',
                  html: 'updated html',
                  scss: 'updated scss',
                },
              },
              required: ['template'],
              title: 'update_template_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'update template success',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({ required: ['status'], title: 'update_template_response' }),
          examples: { response: { value: { status: 'success' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const putTemplatesTemplateIdAddFieldsRoute = createRoute({
  method: 'put',
  path: '/templates/{template_id}/add_fields',
  tags: ['PDF'],
  summary: 'Add new fields to a Template',
  operationId: 'addFieldsToTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000002',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              fields: z.array(
                z
                  .strictObject({
                    alignment: z.enum(['left', 'center', 'right']).exactOptional(),
                    autoCalculateMaxLength: z.boolean().exactOptional(),
                    backgroundColor: z.string().exactOptional(),
                    backgroundColorFieldName: z.string().exactOptional(),
                    backgroundColorFieldRequired: z.boolean().exactOptional(),
                    barcodeSymbology: z.string().exactOptional(),
                    bold: z.boolean().exactOptional(),
                    characterSpacing: z.number().exactOptional(),
                    checkCharacter: z
                      .enum(['&#10003;', '&#10004;', '&#10006;', '&#10007;', '&#10008;'])
                      .exactOptional(),
                    checkColor: z.string().exactOptional(),
                    checkColorFieldName: z.string().exactOptional(),
                    checkColorFieldRequired: z.boolean().exactOptional(),
                    color: z.string().exactOptional(),
                    colorFieldName: z.string().exactOptional(),
                    colorFieldRequired: z.boolean().exactOptional(),
                    comb: z.boolean().exactOptional(),
                    combNumberOfCells: z.number().min(0).exactOptional(),
                    combValueOffset: z.number().exactOptional(),
                    combinedFieldFormat: z.string().exactOptional(),
                    combinedFieldNames: z.string().exactOptional(),
                    combinedFieldSeparator: z.string().exactOptional(),
                    combinedFieldType: z.string().exactOptional(),
                    condition: z.string().exactOptional(),
                    currency: z.boolean().exactOptional(),
                    dateTimeFormat: z.string().exactOptional(),
                    decimalPlaces: z.number().min(0).exactOptional(),
                    default: z.string().exactOptional(),
                    description: z.string().exactOptional(),
                    displayType: z
                      .enum(['text', 'check', 'qrcode', 'barcode', 'image', 'shape'])
                      .exactOptional(),
                    exclusiveMaximum: z.boolean().exactOptional(),
                    exclusiveMinimum: z.boolean().exactOptional(),
                    falseText: z.string().exactOptional(),
                    fontSize: z.number().min(0).exactOptional(),
                    height: z.number().min(0).exactOptional(),
                    hidden: z.boolean().exactOptional(),
                    id: z.number().min(0).exactOptional(),
                    imageGravity: z
                      .enum([
                        'NorthWest',
                        'North',
                        'NorthEast',
                        'West',
                        'Center',
                        'East',
                        'SouthWest',
                        'South',
                        'SouthEast',
                      ])
                      .exactOptional(),
                    imageScaleType: z.enum(['fit', 'fill', 'stretch']).exactOptional(),
                    includeTime: z.boolean().exactOptional(),
                    integer: z.boolean().exactOptional(),
                    invertBooleanCondition: z.boolean().exactOptional(),
                    maxLength: z.number().exactOptional(),
                    maximum: z.number().exactOptional(),
                    metadata: z.string().exactOptional(),
                    minLength: z.number().exactOptional(),
                    minimum: z.number().exactOptional(),
                    multiline: z.boolean().exactOptional(),
                    multilineLines: z.number().min(0).exactOptional(),
                    name: z.string(),
                    numberConditionRangeExclusiveMax: z.boolean().exactOptional(),
                    numberConditionRangeExclusiveMin: z.boolean().exactOptional(),
                    numberConditionRangeMax: z.number().exactOptional(),
                    numberConditionRangeMin: z.number().exactOptional(),
                    numberConditionType: z
                      .enum(['equals', 'range', 'gte', 'gt', 'lte', 'lt'])
                      .exactOptional(),
                    opacity: z.number().min(0).max(1).exactOptional(),
                    optionList: z.string().exactOptional(),
                    overflow: z.enum(['shrink_to_fit', 'truncate']).exactOptional(),
                    page: z.number().min(1),
                    placeholder: z.string().exactOptional(),
                    qrcodeColor: z.string().exactOptional(),
                    qrcodeColorFieldName: z.string().exactOptional(),
                    qrcodeColorFieldRequired: z.boolean().exactOptional(),
                    required: z.boolean().exactOptional(),
                    rotation: z.number().min(0).max(360).exactOptional(),
                    shapeBorderColor: z.string().exactOptional(),
                    shapeBorderColorFieldName: z.string().exactOptional(),
                    shapeBorderColorFieldRequired: z.boolean().exactOptional(),
                    shapeBorderWidth: z.number().min(0).exactOptional(),
                    shapeFillColor: z.string().exactOptional(),
                    shapeFillColorFieldName: z.string().exactOptional(),
                    shapeFillColorFieldRequired: z.boolean().exactOptional(),
                    shapeType: z.enum(['square', 'rectangle', 'circle', 'ellipse']).exactOptional(),
                    signatureAllowDraw: z.boolean().exactOptional(),
                    signatureAllowType: z.boolean().exactOptional(),
                    static: z.boolean().exactOptional(),
                    strikethrough: z.boolean().exactOptional(),
                    stringConditionType: z
                      .enum(['equals', 'contains', 'starts_with', 'ends_with', 'regex'])
                      .exactOptional(),
                    title: z.string().exactOptional(),
                    trueText: z.string().exactOptional(),
                    type: z
                      .enum([
                        'string',
                        'number',
                        'boolean',
                        'date',
                        'address',
                        'country',
                        'email',
                        'url',
                        'image',
                        'signature',
                        'barcode',
                        'combined',
                      ])
                      .exactOptional(),
                    typeface: z.string().exactOptional(),
                    uppercase: z.boolean().exactOptional(),
                    vAlignment: z.enum(['bottom', 'center', 'top']).exactOptional(),
                    width: z.number().min(0).exactOptional(),
                    x: z.number().min(0).exactOptional(),
                    y: z.number().min(0).exactOptional(),
                  })
                  .openapi({ required: ['name', 'page'] }),
              ),
            })
            .openapi({
              example: {
                fields: [
                  { name: 'new_field1', page: 1 },
                  {
                    default: 'default text',
                    displayType: 'text',
                    name: 'new_field2',
                    overflow: 'truncate',
                    page: 1,
                    rotation: 10,
                    type: 'string',
                  },
                  {
                    displayType: 'text',
                    integer: true,
                    name: 'new_field3',
                    page: 2,
                    rotation: 0,
                    type: 'number',
                  },
                  {
                    displayType: 'text',
                    integer: true,
                    name: 'new_field4',
                    page: 3,
                    rotation: 0,
                    type: 'number',
                  },
                  {
                    displayType: 'text',
                    height: 50,
                    id: 99,
                    integer: true,
                    name: 'new_field5',
                    page: 2,
                    rotation: 0,
                    type: 'number',
                    width: 150,
                    x: 20,
                    y: 60,
                  },
                  {
                    description: 'updated description for existing field',
                    displayType: 'text',
                    height: 50,
                    integer: true,
                    maximum: 100,
                    minimum: 10,
                    name: 'first_name',
                    page: 1,
                    rotation: 0,
                    type: 'number',
                    width: 150,
                    x: 40,
                    y: 60,
                  },
                ],
              },
              required: ['fields'],
              title: 'add_fields_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'add fields success',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(z.string()).exactOptional(),
              new_field_ids: z.array(z.int()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({ required: ['status'], title: 'add_fields_template_response' }),
          examples: {
            response: { value: { new_field_ids: [4, 5, 6, 7, 99, 8], status: 'success' } },
          },
        },
      },
    },
    422: {
      description: 'add fields error',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(z.string()).exactOptional(),
              new_field_ids: z.array(z.int()).exactOptional(),
              status: z.enum(['success', 'error']),
            })
            .openapi({ required: ['status'], title: 'add_fields_template_response' }),
          examples: {
            response: {
              value: {
                errors: [
                  "The property '#/fields/0' did not contain a required property of 'page'",
                  "The property '#/fields/1/page' did not have a minimum value of 1, inclusively",
                  'The property \'#/fields/5\' contains additional properties ["unknown_property"] outside of the schema when none are allowed',
                  'The property \'#/fields/6/displayType\' value "unknown display type" did not match one of the following values: text, check, qrcode, barcode, image, shape',
                  'The property \'#/fields/6/type\' value "unknown type" did not match one of the following values: string, number, boolean, date, address, country, email, url, image, signature, barcode, combined',
                  "The property '#/fields/6' did not contain a required property of 'page'",
                  "The property '#/fields/7/width' of type string did not match the following type: number",
                  "The property '#/fields/8/height' did not have a minimum value of 0, inclusively",
                  "The property '#/fields/8/width' did not have a minimum value of 0, inclusively",
                  "The property '#/fields/8/x' did not have a minimum value of 0, inclusively",
                  "The property '#/fields/8/y' did not have a minimum value of 0, inclusively",
                  'The property \'#/fields/2/id\' value "1" is already taken by another field',
                  'The property \'#/fields/2/page\' value "5" did not have a maximum value of 3, inclusively (Template has 3 pages)',
                  'The property \'#/fields/3/page\' value "4" did not have a maximum value of 3, inclusively (Template has 3 pages)',
                ],
                status: 'error',
              },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesTemplateIdCopyRoute = createRoute({
  method: 'post',
  path: '/templates/{template_id}/copy',
  tags: ['PDF'],
  summary: 'Copy a Template',
  operationId: 'copyTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().exactOptional(), parent_folder_id: z.string() })
            .openapi({
              example: { name: 'Copied Template Name', parent_folder_id: 'fld_000000000000000001' },
              required: ['parent_folder_id'],
              title: 'copy_template_data',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'copy template success',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              document_url: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']),
              expire_after: z.number(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              page_dimensions: z.array(z.array(z.number()).length(2)).nullable(),
              parent_folder_id: z.string().nullable(),
              path: z.string(),
              permanent_document_url: z.string().nullable(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'allow_additional_properties',
                'description',
                'document_url',
                'editable_submissions',
                'expiration_interval',
                'expire_after',
                'expire_submissions',
                'id',
                'locked',
                'name',
                'page_dimensions',
                'parent_folder_id',
                'path',
                'permanent_document_url',
                'public_submissions',
                'public_web_form',
                'redirect_url',
                'slack_webhook_url',
                'template_type',
                'webhook_url',
              ],
              title: 'template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: null,
                document_filename: 'blank_pdf.pdf',
                document_processed: true,
                document_state: 'processed',
                document_url:
                  '/uploads/test/store/acc_000000000000000001/templates/tpl_00000000000000new1/document/original-0000000000.pdf',
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: true,
                id: 'tpl_00000000000000new1',
                locked: false,
                name: 'Copied Template Name',
                page_count: 1,
                page_dimensions: [[612, 792]],
                parent_folder_id: 'fld_000000000000000001',
                path: '/Folder',
                permanent_document_url:
                  'http://app.docspring.local/templates/tpl_00000000000000new1/original_pdf?token=123456789abcdef',
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'folder not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error: 'Could not find parent folder MISSING_ID', status: 'error' },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesTemplateIdMoveRoute = createRoute({
  method: 'post',
  path: '/templates/{template_id}/move',
  tags: ['PDF'],
  summary: 'Move Template to folder',
  operationId: 'moveTemplateToFolder',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ parent_folder_id: z.string() })
            .openapi({
              example: { parent_folder_id: 'fld_000000000000000001' },
              required: ['parent_folder_id'],
              title: 'move_template_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'move template success',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              document_url: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']),
              expire_after: z.number(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              page_dimensions: z.array(z.array(z.number()).length(2)).nullable(),
              parent_folder_id: z.string().nullable(),
              path: z.string(),
              permanent_document_url: z.string().nullable(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'allow_additional_properties',
                'description',
                'document_url',
                'editable_submissions',
                'expiration_interval',
                'expire_after',
                'expire_submissions',
                'id',
                'locked',
                'name',
                'page_dimensions',
                'parent_folder_id',
                'path',
                'permanent_document_url',
                'public_submissions',
                'public_web_form',
                'redirect_url',
                'slack_webhook_url',
                'template_type',
                'webhook_url',
              ],
              title: 'template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: null,
                document_filename: 'blank_pdf.pdf',
                document_processed: true,
                document_state: 'processed',
                document_url:
                  '/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf',
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: true,
                id: 'tpl_000000000000000001',
                locked: false,
                name: 'Template 1',
                page_count: 1,
                page_dimensions: [[612, 792]],
                parent_folder_id: 'fld_000000000000000001',
                path: '/Folder',
                permanent_document_url:
                  'http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef',
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'folder not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: { error: 'Could not find parent folder MISSING_ID', status: 'error' },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getTemplatesTemplateIdSchemaRoute = createRoute({
  method: 'get',
  path: '/templates/{template_id}/schema',
  tags: ['PDF'],
  summary: 'Fetch the JSON schema for a template',
  operationId: 'getTemplateSchema',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'template found',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              $schema: z.url().exactOptional(),
              additionalProperties: z.boolean().exactOptional(),
              definitions: z.object({}).default({}).exactOptional(),
              description: z.string().exactOptional(),
              id: z.string().exactOptional(),
              properties: z.object({}).exactOptional(),
              required: z.array(z.any()).exactOptional(),
              title: z.string().exactOptional(),
              type: z.string().exactOptional(),
            })
            .openapi({ title: 'template_schema', required: [] }),
          examples: {
            response: {
              value: {
                $schema: 'http://json-schema.org/draft-04/schema#',
                additionalProperties: false,
                definitions: {},
                description: 'JSON Schema generated by DocSpring.com',
                id: 'https://api.docspring.com/api/v1/templates/tpl_000000000000000001/schema.json',
                properties: {
                  first_name: { title: 'First Name', type: 'string' },
                  last_name: { title: 'Last Name', type: 'string' },
                  phone_number: { title: 'Phone Number', type: ['string', 'null'] },
                },
                required: ['first_name', 'last_name'],
                title: 'Template 1',
                type: 'object',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'template not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Template not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getTemplatesTemplateIdSubmissionsRoute = createRoute({
  method: 'get',
  path: '/templates/{template_id}/submissions',
  tags: ['PDF'],
  summary: 'List all submissions for a given template',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000002',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: null,
            in: 'query',
            name: 'cursor',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            example: null,
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'number' },
          },
        }),
      created_after: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: null,
            in: 'query',
            name: 'created_after',
            required: false,
            schema: { type: 'string' },
          },
        }),
      created_before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: null,
            in: 'query',
            name: 'created_before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            example: null,
            in: 'query',
            name: 'type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      include_data: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            example: true,
            in: 'query',
            name: 'include_data',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'listing submissions',
      content: {
        'application/json': {
          schema: z
            .object({
              limit: z.number(),
              next_cursor: z.string().nullable(),
              submissions: z.array(SubmissionSchema),
            })
            .openapi({
              required: ['submissions', 'limit', 'next_cursor'],
              title: 'list_submissions_response',
            }),
          examples: {
            response: {
              value: {
                limit: 50,
                next_cursor: 'sub_list_000014',
                submissions: [
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000011',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000011/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000002',
                    test: false,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000012',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000012/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000002',
                    test: false,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000013',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000013/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000002',
                    test: false,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                  {
                    actions: [],
                    batch_id: null,
                    data: {
                      first_name: 'John C. D. Rom Laserdisk F. Scott Fitzgerald',
                      last_name: 'Smith',
                      phone_number: '+11234567890',
                    },
                    data_requests: [],
                    download_url: 'https://example.com/submissions/submission.pdf',
                    editable: false,
                    expired: false,
                    expires_at: '2020-10-27T13:00:00Z',
                    id: 'sub_list_000014',
                    json_schema_errors: [],
                    metadata: { qux: 'abc', user_id: 42 },
                    password: null,
                    pdf_hash: 'bbc369dd471442006963e3244a1b43610e066165c09770978221f91bd7ace8f5',
                    permanent_download_url:
                      'http://app.docspring.local/submissions/sub_list_000014/download',
                    processed_at: '2020-05-14T02:00:00Z',
                    referrer: null,
                    source: 'api',
                    state: 'processed',
                    template_id: 'tpl_000000000000000002',
                    test: false,
                    truncated_text: { first_name: ['F. Scott Fitzgerald'] },
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'invalid template id',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesTemplateIdSubmissionsRoute = createRoute({
  method: 'post',
  path: '/templates/{template_id}/submissions',
  tags: ['PDF'],
  summary: 'Generates a new PDF',
  operationId: 'generatePDF',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              css: z.string().exactOptional(),
              data: z.object({}),
              data_requests: z
                .array(
                  z
                    .object({
                      auth_phone_number_hash: z.string().nullable().exactOptional(),
                      auth_provider: z.string().nullable().exactOptional(),
                      auth_second_factor_type: z
                        .enum([
                          'none',
                          'phone_number',
                          'totp',
                          'mobile_push',
                          'security_key',
                          'fingerprint',
                        ])
                        .exactOptional(),
                      auth_session_id_hash: z.string().nullable().exactOptional(),
                      auth_session_started_at: z.string().nullable().exactOptional(),
                      auth_type: z.enum([
                        'none',
                        'password',
                        'oauth',
                        'email_link',
                        'phone_number',
                        'ldap',
                        'saml',
                      ]),
                      auth_user_id_hash: z.string().nullable().exactOptional(),
                      auth_username_hash: z.string().nullable().exactOptional(),
                      email: z.string().nullable(),
                      fields: z.array(z.string()).nullable().exactOptional(),
                      metadata: z.object({}).exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      order: z.int().exactOptional(),
                    })
                    .openapi({
                      required: ['email', 'auth_type'],
                      title: 'create_submission_data_request_data',
                    }),
                )
                .exactOptional(),
              expires_in: z.int().exactOptional(),
              field_overrides: z.object({}).exactOptional(),
              html: z.string().exactOptional(),
              metadata: z.object({}).exactOptional(),
              password: z.string().exactOptional(),
              test: z.boolean().exactOptional(),
            })
            .openapi({
              example: {
                data: { first_name: 'John', last_name: 'Smith', phone_number: '+11234567890' },
                expires_in: 300,
                metadata: { bar: 'baz', foo: 123 },
              },
              required: ['data'],
              title: 'submission_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'submission created',
      content: {
        'application/json': {
          schema: z
            .object({
              errors: z.array(z.string()).exactOptional(),
              status: z.enum(['success', 'error']),
              submission: SubmissionSchema,
            })
            .openapi({
              required: ['status', 'submission'],
              title: 'create_submission_response',
              'x-password': { type: 'string', 'x-nullable': true },
            }),
          examples: {
            response: {
              value: {
                status: 'success',
                submission: {
                  actions: [],
                  batch_id: null,
                  data_requests: [],
                  download_url: null,
                  editable: null,
                  expired: false,
                  expires_at: null,
                  id: 'sub_000000000000000001',
                  json_schema_errors: [],
                  metadata: { bar: 'baz', foo: 123 },
                  password: null,
                  pdf_hash: null,
                  permanent_download_url: null,
                  processed_at: null,
                  state: 'pending',
                  template_id: 'tpl_000000000000000001',
                  test: false,
                  truncated_text: {},
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'invalid JSON',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error:
                  'There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in \'{ "first_name": "John", last_name: "Smith" }',
                status: 'error',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret', status: 'error' } } },
        },
      },
    },
    422: {
      description: 'invalid request',
      content: {
        'application/json': {
          schema: InvalidRequestSchema,
          examples: {
            response: {
              value: {
                errors: ["Your submission data did not contain a required property of 'last_name'"],
                status: 'error',
                submission: {
                  actions: [],
                  batch_id: null,
                  data_requests: [],
                  download_url: null,
                  editable: null,
                  expired: false,
                  expires_at: null,
                  id: 'sub_000000000000000001',
                  json_schema_errors: [
                    "Your submission data did not contain a required property of 'last_name'",
                  ],
                  metadata: { bar: 'baz', foo: 123 },
                  password: null,
                  pdf_hash: null,
                  permanent_download_url: null,
                  processed_at: null,
                  state: 'invalid_data',
                  template_id: 'tpl_000000000000000001',
                  test: false,
                  truncated_text: {},
                },
              },
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesTemplateIdSubmissionsBatchRoute = createRoute({
  method: 'post',
  path: '/templates/{template_id}/submissions/batch',
  tags: ['PDF'],
  summary: 'Generates multiple PDFs',
  operationId: 'batchGeneratePdfV1',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              css: z.string().exactOptional(),
              data: z.object({}),
              data_requests: z
                .array(
                  z
                    .object({
                      auth_phone_number_hash: z.string().nullable().exactOptional(),
                      auth_provider: z.string().nullable().exactOptional(),
                      auth_second_factor_type: z
                        .enum([
                          'none',
                          'phone_number',
                          'totp',
                          'mobile_push',
                          'security_key',
                          'fingerprint',
                        ])
                        .exactOptional(),
                      auth_session_id_hash: z.string().nullable().exactOptional(),
                      auth_session_started_at: z.string().nullable().exactOptional(),
                      auth_type: z.enum([
                        'none',
                        'password',
                        'oauth',
                        'email_link',
                        'phone_number',
                        'ldap',
                        'saml',
                      ]),
                      auth_user_id_hash: z.string().nullable().exactOptional(),
                      auth_username_hash: z.string().nullable().exactOptional(),
                      email: z.string().nullable(),
                      fields: z.array(z.string()).nullable().exactOptional(),
                      metadata: z.object({}).exactOptional(),
                      name: z.string().nullable().exactOptional(),
                      order: z.int().exactOptional(),
                    })
                    .openapi({
                      required: ['email', 'auth_type'],
                      title: 'create_submission_data_request_data',
                    }),
                )
                .exactOptional(),
              html: z.string().exactOptional(),
              metadata: z.object({}).exactOptional(),
              test: z.boolean().exactOptional(),
            })
            .openapi({
              example: [
                {
                  data: { first_name: 'Johnny', last_name: 'Smith' },
                  metadata: { submission_number: 1 },
                },
                {
                  data: { first_name: 'Jane', last_name: 'Doe' },
                  metadata: { submission_number: 2 },
                },
              ],
              required: ['data'],
              title: 'create_submission_batch_v1',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'submissions created',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                errors: z.array(z.string()).exactOptional(),
                status: z.enum(['success', 'error']),
                submission: SubmissionSchema,
              })
              .openapi({ required: ['status', 'submission'], title: 'create_submission_response' }),
          ),
          examples: {
            response: {
              value: [
                {
                  status: 'success',
                  submission: {
                    actions: [],
                    batch_id: null,
                    data_requests: [],
                    download_url: null,
                    editable: null,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000001',
                    json_schema_errors: [],
                    metadata: { submission_number: 1 },
                    password: null,
                    pdf_hash: null,
                    permanent_download_url: null,
                    processed_at: null,
                    state: 'pending',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                },
                {
                  status: 'success',
                  submission: {
                    actions: [],
                    batch_id: null,
                    data_requests: [],
                    download_url: null,
                    editable: null,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000002',
                    json_schema_errors: [],
                    metadata: { submission_number: 2 },
                    password: null,
                    pdf_hash: null,
                    permanent_download_url: null,
                    processed_at: null,
                    state: 'pending',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'invalid JSON',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            response: {
              value: {
                error:
                  'There was a problem with the JSON you submitted: unexpected character at line 1, column 25 in \'{ "first_name": "John", last_name: "Smith" }',
                status: 'error',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Invalid API token secret' } } },
        },
      },
    },
    422: {
      description: 'invalid requests',
      content: {
        'application/json': {
          schema: z.array(InvalidRequestSchema),
          examples: {
            response: {
              value: [
                {
                  errors: [
                    "Your submission data did not contain a required property of 'last_name'",
                  ],
                  status: 'error',
                  submission: {
                    actions: [],
                    batch_id: null,
                    data_requests: [],
                    download_url: null,
                    editable: null,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000001',
                    json_schema_errors: [
                      "Your submission data did not contain a required property of 'last_name'",
                    ],
                    metadata: { submission_number: 1 },
                    password: null,
                    pdf_hash: null,
                    permanent_download_url: null,
                    processed_at: null,
                    state: 'invalid_data',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                },
                {
                  errors: [
                    "Your submission data did not contain a required property of 'first_name'",
                  ],
                  status: 'error',
                  submission: {
                    actions: [],
                    batch_id: null,
                    data_requests: [],
                    download_url: null,
                    editable: null,
                    expired: false,
                    expires_at: null,
                    id: 'sub_000000000000000002',
                    json_schema_errors: [
                      "Your submission data did not contain a required property of 'first_name'",
                    ],
                    metadata: { submission_number: 2 },
                    password: null,
                    pdf_hash: null,
                    permanent_download_url: null,
                    processed_at: null,
                    state: 'invalid_data',
                    template_id: 'tpl_000000000000000001',
                    test: false,
                    truncated_text: {},
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getTemplatesTemplateIdFullTrueRoute = createRoute({
  method: 'get',
  path: '/templates/{template_id}?full=true',
  tags: ['PDF'],
  summary: 'Fetch the full template attributes',
  operationId: 'getFullTemplate',
  request: {
    params: z.object({
      template_id: z
        .string()
        .openapi({
          param: {
            example: 'tpl_000000000000000001',
            in: 'path',
            name: 'template_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'template found',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              defaults: z
                .object({
                  color: z.string().nullable(),
                  fontSize: z.number(),
                  typeface: z.string(),
                })
                .openapi({ required: ['color', 'fontSize', 'typeface'] }),
              demo: z.boolean(),
              description: z.string().nullable(),
              document_filename: z.string().nullable(),
              document_md5: z.string().nullable(),
              document_parse_error: z.boolean(),
              document_processed: z.boolean(),
              document_state: z.string(),
              document_url: z.string().nullable(),
              editable_submissions: z.boolean(),
              embed_domains: z.array(z.string()).nullable(),
              encrypt_pdfs: z.boolean(),
              encrypt_pdfs_password: z.string().nullable(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']),
              expire_after: z.number(),
              expire_submissions: z.boolean(),
              field_order: z.array(z.array(z.number())),
              fields: z.object({}),
              first_template: z.boolean(),
              footer_html: z.string().nullable(),
              header_html: z.string().nullable(),
              html: z.string().nullable(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              page_count: z.number(),
              page_dimensions: z.array(z.array(z.number()).length(2)).nullable(),
              parent_folder_id: z.string().nullable(),
              path: z.string(),
              permanent_document_url: z.string().nullable(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              scss: z.string().nullable(),
              shared_field_data: z.object({}),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'allow_additional_properties',
                'defaults',
                'demo',
                'description',
                'document_filename',
                'document_md5',
                'document_parse_error',
                'document_processed',
                'document_state',
                'document_url',
                'editable_submissions',
                'embed_domains',
                'encrypt_pdfs',
                'encrypt_pdfs_password',
                'expiration_interval',
                'expire_after',
                'expire_submissions',
                'field_order',
                'fields',
                'first_template',
                'footer_html',
                'header_html',
                'html',
                'id',
                'locked',
                'name',
                'page_count',
                'page_dimensions',
                'parent_folder_id',
                'path',
                'permanent_document_url',
                'public_submissions',
                'public_web_form',
                'redirect_url',
                'scss',
                'shared_field_data',
                'slack_webhook_url',
                'template_type',
                'webhook_url',
              ],
              title: 'full_template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                defaults: {
                  characterSpacing: 0,
                  checkColor: '444444',
                  color: '444444',
                  dateFormat: '%m/%d/%Y',
                  dateTimeFormat: '%m/%d/%Y %H:%M:%S',
                  fontSize: 11,
                  opacity: 1,
                  shapeBorderColor: '4A90E2',
                  typeface: 'Helvetica',
                },
                demo: false,
                description: null,
                document_filename: 'blank_pdf.pdf',
                document_md5: '1c32d785398e3a7eaab0e9b876903cc6',
                document_parse_error: false,
                document_processed: true,
                document_state: 'processed',
                document_url:
                  '/uploads/test/store/acc_000000000000000001/templates/tpl_000000000000000001/document/original-0000000000.pdf',
                editable_submissions: false,
                embed_domains: null,
                encrypt_pdfs: false,
                encrypt_pdfs_password: null,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: true,
                field_order: [[1, 2, 3]],
                fields: {
                  '1': {
                    displayType: 'text',
                    height: 80,
                    name: 'first_name',
                    width: 200,
                    x: 0,
                    y: 0,
                  },
                  '2': {
                    displayType: 'text',
                    height: 80,
                    name: 'last_name',
                    width: 200,
                    x: 0,
                    y: 100,
                  },
                  '3': {
                    displayType: 'text',
                    height: 80,
                    name: 'phone_number',
                    width: 200,
                    x: 0,
                    y: 200,
                  },
                },
                first_template: false,
                footer_html: null,
                header_html: null,
                html: null,
                html_engine_options: {
                  format: 'Letter',
                  landscape: false,
                  marginBottom: '1in',
                  marginLeft: '1in',
                  marginRight: '1in',
                  marginTop: '1in',
                  scale: 1,
                },
                id: 'tpl_000000000000000001',
                locked: false,
                name: 'Template 1',
                page_count: 1,
                page_dimensions: [[612, 792]],
                parent_folder_id: null,
                path: '/',
                permanent_document_url:
                  'http://app.docspring.local/templates/tpl_000000000000000001/original_pdf?token=123456789abcdef',
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                scss: null,
                shared_field_data: {
                  first_name: { fieldCount: 1, name: 'first_name', required: true, type: 'string' },
                  last_name: { fieldCount: 1, name: 'last_name', required: true, type: 'string' },
                  phone_number: {
                    fieldCount: 1,
                    name: 'phone_number',
                    required: false,
                    type: 'string',
                  },
                },
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
    404: {
      description: 'template not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { response: { value: { error: 'Template not found.', status: 'error' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesDescCachedUploadRoute = createRoute({
  method: 'post',
  path: '/templates?desc=cached_upload',
  tags: ['PDF'],
  summary: 'Create a new PDF template from a cached presign upload',
  operationId: 'createPDFTemplateFromUpload',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template: z
                .object({
                  allow_additional_properties: z.boolean().exactOptional(),
                  description: z.string().nullable().exactOptional(),
                  document: z
                    .object({
                      id: z.string(),
                      metadata: z
                        .object({
                          filename: z.string(),
                          mime_type: z.literal('application/pdf'),
                          size: z.int(),
                        })
                        .openapi({ required: ['filename', 'size', 'mime_type'] }),
                      storage: z.literal('cache'),
                    })
                    .exactOptional()
                    .openapi({ required: ['id', 'storage', 'metadata'] }),
                  editable_submissions: z.boolean().exactOptional(),
                  expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
                  expire_after: z.number().exactOptional(),
                  expire_submissions: z.boolean().exactOptional(),
                  footer_html: z.string().nullable().exactOptional(),
                  header_html: z.string().nullable().exactOptional(),
                  html: z.string().nullable().exactOptional(),
                  name: z.string().nullable(),
                  public_submissions: z.boolean().exactOptional(),
                  public_web_form: z.boolean().exactOptional(),
                  redirect_url: z.string().nullable().exactOptional(),
                  scss: z.string().nullable().exactOptional(),
                  slack_webhook_url: z.string().nullable().exactOptional(),
                  template_type: z.enum(['pdf', 'html']).exactOptional(),
                  webhook_url: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['name'], title: 'upload_template_data' }),
            })
            .openapi({
              example: {
                template: {
                  document: {
                    id: 'b6903dbfb15c13bbad1444c35064df9e',
                    metadata: {
                      filename: 'fw8ben-presigned.pdf',
                      mime_type: 'application/pdf',
                      size: 5885,
                    },
                    storage: 'cache',
                  },
                  name: 'Test Template Presigned',
                },
              },
              required: ['template'],
              title: 'create_template_from_upload_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'returns a pending template',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
              expire_after: z.number().exactOptional(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'description',
                'template_type',
                'public_web_form',
                'public_submissions',
                'expire_submissions',
                'allow_additional_properties',
                'editable_submissions',
                'locked',
                'page_dimensions',
                'webhook_url',
                'slack_webhook_url',
                'redirect_url',
              ],
              title: 'pending_template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: null,
                document_filename: 'fw8ben-presigned.pdf',
                document_processed: false,
                document_state: 'pending',
                document_url: '/uploads/test/cache/b6903dbfb15c13bbad1444c35064df9e',
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: false,
                id: 'tpl_000000000000000004',
                locked: false,
                name: 'Test Template Presigned',
                page_count: 0,
                page_dimensions: null,
                parent_folder_id: null,
                path: '/',
                permanent_document_url: null,
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'pdf',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const postTemplatesDescHtmlRoute = createRoute({
  method: 'post',
  path: '/templates?desc=html',
  tags: ['PDF'],
  summary: 'Create a new HTML template',
  operationId: 'createHTMLTemplate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template: z
                .object({
                  allow_additional_properties: z.boolean().exactOptional(),
                  description: z.string().nullable().exactOptional(),
                  editable_submissions: z.boolean().exactOptional(),
                  expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
                  expire_after: z.number().exactOptional(),
                  expire_submissions: z.boolean().exactOptional(),
                  footer_html: z.string().nullable().exactOptional(),
                  header_html: z.string().nullable().exactOptional(),
                  html: z.string().nullable().exactOptional(),
                  name: z.string().nullable(),
                  public_submissions: z.boolean().exactOptional(),
                  public_web_form: z.boolean().exactOptional(),
                  redirect_url: z.string().nullable().exactOptional(),
                  scss: z.string().nullable().exactOptional(),
                  slack_webhook_url: z.string().nullable().exactOptional(),
                  template_type: z.enum(['pdf', 'html']).exactOptional(),
                  webhook_url: z.string().nullable().exactOptional(),
                })
                .openapi({ required: ['name'], title: 'html_template_data' }),
            })
            .openapi({
              example: {
                template: {
                  description: 'HTML template created via API',
                  footer_html: 'Test Footer',
                  header_html: 'Test Header',
                  html: '<html><body><p>Test Content</p></body></html>',
                  name: 'Test HTML Template',
                  scss: 'body { color: #444; }',
                  template_type: 'html',
                },
              },
              required: ['template'],
              title: 'create_html_template_data',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'returns a created template',
      content: {
        'application/json': {
          schema: z
            .object({
              allow_additional_properties: z.boolean(),
              description: z.string().nullable(),
              editable_submissions: z.boolean(),
              expiration_interval: z.enum(['minutes', 'hours', 'days']).exactOptional(),
              expire_after: z.number().exactOptional(),
              expire_submissions: z.boolean(),
              id: z.string(),
              locked: z.boolean(),
              name: z.string().nullable(),
              parent_folder_id: z.string().nullable().exactOptional(),
              path: z.string().exactOptional(),
              public_submissions: z.boolean(),
              public_web_form: z.boolean(),
              redirect_url: z.string().nullable(),
              slack_webhook_url: z.string().nullable(),
              template_type: z.string(),
              webhook_url: z.string().nullable(),
            })
            .openapi({
              required: [
                'id',
                'name',
                'description',
                'template_type',
                'public_web_form',
                'public_submissions',
                'expire_submissions',
                'allow_additional_properties',
                'editable_submissions',
                'locked',
                'page_dimensions',
                'webhook_url',
                'slack_webhook_url',
                'redirect_url',
              ],
              title: 'pending_template',
            }),
          examples: {
            response: {
              value: {
                allow_additional_properties: false,
                description: 'HTML template created via API',
                document_filename: null,
                document_processed: false,
                document_state: 'pending',
                document_url: null,
                editable_submissions: false,
                expiration_interval: 'days',
                expire_after: 7,
                expire_submissions: false,
                id: 'tpl_000000000000000004',
                locked: false,
                name: 'Test HTML Template',
                page_count: 1,
                page_dimensions: null,
                parent_folder_id: null,
                path: '/',
                permanent_document_url: null,
                public_submissions: false,
                public_web_form: false,
                redirect_url: null,
                slack_webhook_url: null,
                template_type: 'html',
                webhook_url: null,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

export const getUploadsPresignRoute = createRoute({
  method: 'get',
  path: '/uploads/presign',
  tags: ['PDF'],
  summary: 'Get a presigned URL so that you can upload a file to our AWS S3 bucket',
  operationId: 'getPresignUrl',
  responses: {
    200: {
      description: 'presign URL generated',
      content: {
        'application/json': {
          schema: z
            .strictObject({
              fields: z
                .strictObject({
                  key: z.string(),
                  policy: z.string(),
                  'x-amz-algorithm': z.string(),
                  'x-amz-credential': z.string(),
                  'x-amz-date': z.string(),
                  'x-amz-signature': z.string(),
                })
                .openapi({
                  required: [
                    'key',
                    'policy',
                    'x-amz-algorithm',
                    'x-amz-credential',
                    'x-amz-date',
                    'x-amz-signature',
                  ],
                }),
              headers: z.object({}),
              method: z.literal('post').exactOptional(),
              url: z.string(),
            })
            .openapi({ required: ['fields', 'headers', 'url'], title: 'upload_presign' }),
          examples: {
            response: {
              value: {
                fields: {
                  key: 'ed9424dccf185f3835df4e9e1da0ca0b',
                  policy:
                    'eyJleHBpcmF0aW9uIjoiMjAxOS0xMC0wNVQxNDowMDowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJ0ZXN0LWJ1Y2tldCJ9LHsia2V5IjoiZWQ5NDI0ZGNjZjE4NWYzODM1ZGY0ZTllMWRhMGNhMGIifSx7IngtYW16LWNyZWRlbnRpYWwiOiIxMjM0NTY3ODkvMjAxOTEwMDUvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMTkxMDA1VDEzMDAwMFoifV19',
                  'x-amz-algorithm': 'AWS4-HMAC-SHA256',
                  'x-amz-credential': '123456789/20191005/us-east-1/s3/aws4_request',
                  'x-amz-date': '20191005T130000Z',
                  'x-amz-signature':
                    '6b715e441bd7ea5beec87f8415230a600be6dfd76b8f89103137618dca959fac',
                },
                headers: {},
                method: 'post',
                url: 'https://test-bucket.s3.amazonaws.com',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'authentication failed',
      content: {
        'application/json': {
          schema: AuthenticationErrorSchema,
          examples: { response: { value: { error: 'Unauthorized' } } },
        },
      },
    },
  },
  security: [{ api_token_basic: [] }],
})

import { createRoute, z } from '@hono/zod-openapi'

export const getJsonEmailYOURAPIKEYHEREUSEREMAILHERERoute = createRoute({
  method: 'get',
  path: '/json/email/{YOUR_API_KEY_HERE}/{USER_EMAIL_HERE}',
  tags: ['email_validation'],
  summary: 'Email Validation',
  description: 'Email Validation',
  operationId: 'emailValidation',
  request: {
    params: z.object({
      YOUR_API_KEY_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) YOUR_API_KEY_HERE',
            in: 'path',
            name: 'YOUR_API_KEY_HERE',
            required: true,
            schema: { example: 'asd24#sdfs322#', type: 'string' },
          },
          example: 'asd24#sdfs322#',
        }),
      USER_EMAIL_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) USER_EMAIL_HERE',
            in: 'path',
            name: 'USER_EMAIL_HERE',
            required: true,
            schema: { example: 'example@example.com', type: 'string' },
          },
          example: 'example@example.com',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              associated_names: z
                .object({
                  names: z
                    .array(z.string().openapi({ example: 'names' }))
                    .exactOptional()
                    .openapi({ example: ['names', 'names'] }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Enterprise Plus or higher required.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              associated_phone_numbers: z
                .object({
                  phone_numbers: z
                    .array(z.string().openapi({ example: 'phone_numbers' }))
                    .exactOptional()
                    .openapi({ example: ['phone_numbers', 'phone_numbers'] }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Enterprise Plus or higher required.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              catch_all: z.boolean().exactOptional().openapi({ example: true }),
              common: z.boolean().exactOptional().openapi({ example: false }),
              deliverability: z.string().exactOptional().openapi({ example: 'high.' }),
              disposable: z.boolean().exactOptional().openapi({ example: false }),
              dns_valid: z.boolean().exactOptional().openapi({ example: true }),
              domain_age: z
                .object({
                  human: z.string().exactOptional().openapi({ example: '9 years ago' }),
                  iso: z.string().exactOptional().openapi({ example: '2013-09-10T14:18:53-04:00' }),
                  timestamp: z.number().exactOptional().openapi({ example: 1378837133 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              domain_velocity: z.string().exactOptional().openapi({ example: 'none' }),
              first_name: z.string().exactOptional().openapi({ example: 'Success.' }),
              first_seen: z
                .object({
                  human: z.string().exactOptional().openapi({ example: '9 years ago' }),
                  iso: z.string().exactOptional().openapi({ example: '2013-09-10T14:18:53-04:00' }),
                  timestamp: z.number().exactOptional().openapi({ example: 1378837133 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              fraud_score: z.number().exactOptional().openapi({ example: 1 }),
              frequent_complainer: z.boolean().exactOptional().openapi({ example: false }),
              generic: z.boolean().exactOptional().openapi({ example: false }),
              honeypot: z.boolean().exactOptional().openapi({ example: false }),
              leaked: z.boolean().exactOptional().openapi({ example: false }),
              message: z.string().exactOptional().openapi({ example: 'Success.' }),
              overall_score: z.number().exactOptional().openapi({ example: 2 }),
              recent_abuse: z.boolean().exactOptional().openapi({ example: false }),
              request_id: z.string().exactOptional().openapi({ example: '8cib1Ircsadw3gB' }),
              sanitized_email: z
                .string()
                .exactOptional()
                .openapi({ example: 'example@example.com' }),
              smtp_score: z.number().exactOptional().openapi({ example: 5 }),
              spam_trap_score: z.string().exactOptional().openapi({ example: 'none.' }),
              success: z.boolean().exactOptional().openapi({ example: true }),
              suggested_domain: z.string().exactOptional().openapi({ example: 'N/A' }),
              suspect: z.boolean().exactOptional().openapi({ example: false }),
              timed_out: z.boolean().exactOptional().openapi({ example: true }),
              user_activity: z
                .string()
                .exactOptional()
                .openapi({ example: 'Enterprise L4+ required.' }),
              valid: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful response': {
              value: {
                associated_names: {
                  names: ['names', 'names'],
                  status: 'Enterprise Plus or higher required.',
                },
                associated_phone_numbers: {
                  phone_numbers: ['phone_numbers', 'phone_numbers'],
                  status: 'Enterprise Plus or higher required.',
                },
                catch_all: true,
                common: false,
                deliverability: 'high.',
                disposable: false,
                dns_valid: true,
                domain_age: {
                  human: '9 years ago',
                  iso: '2013-09-10T14:18:53-04:00',
                  timestamp: 1378837133,
                },
                domain_velocity: 'none',
                first_name: 'Success.',
                first_seen: {
                  human: '9 years ago',
                  iso: '2013-09-10T14:18:53-04:00',
                  timestamp: 1378837133,
                },
                fraud_score: 1,
                frequent_complainer: false,
                generic: false,
                honeypot: false,
                leaked: false,
                message: 'Success.',
                overall_score: 2,
                recent_abuse: false,
                request_id: '8cib1Ircsadw3gB',
                sanitized_email: 'example@example.com',
                smtp_score: 5,
                spam_trap_score: 'none.',
                success: true,
                suggested_domain: 'N/A',
                suspect: false,
                timed_out: true,
                user_activity: 'Enterprise L4+ required.',
                valid: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Bad Request': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getJsonPhoneYOURAPIKEYHEREUSERPHONEHERERoute = createRoute({
  method: 'get',
  path: '/json/phone/{YOUR_API_KEY_HERE}/{USER_PHONE_HERE}',
  tags: ['phone_validation'],
  summary: 'Phone Validation',
  description: 'Phone Validation',
  operationId: 'phoneValidation',
  request: {
    params: z.object({
      YOUR_API_KEY_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) YOUR_API_KEY_HERE',
            in: 'path',
            name: 'YOUR_API_KEY_HERE',
            required: true,
            schema: { example: 'asd24#sdfs322#', type: 'string' },
          },
          example: 'asd24#sdfs322#',
        }),
      USER_PHONE_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) USER_PHONE_HERE',
            in: 'path',
            name: 'USER_PHONE_HERE',
            required: true,
            schema: { example: '18007132618', type: 'string' },
          },
          example: '18007132618',
        }),
    }),
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'country',
            in: 'query',
            name: 'country',
            schema: { example: 'UK', type: 'string' },
            required: false,
          },
          example: 'UK',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              VOIP: z.boolean().exactOptional().openapi({ example: true }),
              active: z.boolean().exactOptional().openapi({ example: true }),
              active_status: z.string().exactOptional().openapi({ example: 'N/A' }),
              associated_email_addresses: z
                .object({
                  emails: z
                    .array(z.string().openapi({ example: 'names' }))
                    .exactOptional()
                    .openapi({ example: ['names', 'names'] }),
                  status: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'No associated emails found.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              carrier: z.string().exactOptional().openapi({ example: 'ONVOY, LLC' }),
              city: z.string().exactOptional().openapi({ example: 'SEATTLE' }),
              country: z.string().exactOptional().openapi({ example: 'US' }),
              dialing_code: z.number().exactOptional().openapi({ example: 1 }),
              do_not_call: z.boolean().exactOptional().openapi({ example: false }),
              formatted: z.string().exactOptional().openapi({ example: '+3234232342' }),
              fraud_score: z.number().exactOptional().openapi({ example: 100 }),
              leaked: z.boolean().exactOptional().openapi({ example: false }),
              line_type: z.string().exactOptional().openapi({ example: 'VOIP' }),
              local_format: z.string().exactOptional().openapi({ example: '(206) 456-3059' }),
              mcc: z.string().exactOptional().openapi({ example: 'N/A' }),
              message: z.string().exactOptional().openapi({ example: 'Success.' }),
              mnc: z.string().exactOptional().openapi({ example: 'N/A' }),
              name: z.string().exactOptional().openapi({ example: 'N/A' }),
              prepaid: z.string().exactOptional().openapi({ example: 'tempor ea proident quis' }),
              recent_abuse: z.boolean().exactOptional().openapi({ example: true }),
              region: z.string().exactOptional().openapi({ example: 'WA' }),
              request_id: z.string().exactOptional().openapi({ example: '8ctDi1gwuP' }),
              risky: z.boolean().exactOptional().openapi({ example: true }),
              sms_domain: z.string().exactOptional().openapi({ example: 'N/A' }),
              sms_email: z.string().exactOptional().openapi({ example: 'N/A' }),
              spammer: z.boolean().exactOptional().openapi({ example: false }),
              success: z.boolean().exactOptional().openapi({ example: true }),
              timezone: z.string().exactOptional().openapi({ example: 'America/Los_Angeles' }),
              user_activity: z
                .string()
                .exactOptional()
                .openapi({ example: 'Enterprise L4+ required.' }),
              valid: z.boolean().exactOptional().openapi({ example: true }),
              zip_code: z.string().exactOptional().openapi({ example: '98104' }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful response': {
              value: {
                VOIP: true,
                active: true,
                active_status: 'N/A',
                associated_email_addresses: {
                  emails: ['names', 'names'],
                  status: 'No associated emails found.',
                },
                carrier: 'ONVOY, LLC',
                city: 'SEATTLE',
                country: 'US',
                dialing_code: 1,
                do_not_call: false,
                formatted: '+3234232342',
                fraud_score: 100,
                leaked: false,
                line_type: 'VOIP',
                local_format: '(206) 456-3059',
                mcc: 'N/A',
                message: 'Success.',
                mnc: 'N/A',
                name: 'N/A',
                prepaid: 'tempor ea proident quis',
                recent_abuse: true,
                region: 'WA',
                request_id: '8ctDi1gwuP',
                risky: true,
                sms_domain: 'N/A',
                sms_email: 'N/A',
                spammer: false,
                success: true,
                timezone: 'America/Los_Angeles',
                user_activity: 'Enterprise L4+ required.',
                valid: true,
                zip_code: '98104',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Bad Request': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

export const getJsonUrlYOURAPIKEYHEREURLHERERoute = createRoute({
  method: 'get',
  path: '/json/url/{YOUR_API_KEY_HERE}/{URL_HERE}',
  tags: ['malicious_url_scanner'],
  summary: 'Malicious URL Scanner',
  description: 'Malicious URL Scanner',
  operationId: 'maliciousUrlScanner',
  request: {
    params: z.object({
      YOUR_API_KEY_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) YOUR_API_KEY_HERE',
            in: 'path',
            name: 'YOUR_API_KEY_HERE',
            required: true,
            schema: { example: 'asd24#sdfs322#', type: 'string' },
          },
          example: 'asd24#sdfs322#',
        }),
      URL_HERE: z
        .string()
        .openapi({
          param: {
            description: '(Required) URL_HERE',
            in: 'path',
            name: 'URL_HERE',
            required: true,
            schema: { example: 'https%3A%2F%2Fgoogle.com', type: 'string' },
          },
          example: 'https%3A%2F%2Fgoogle.com',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              adult: z.boolean().exactOptional().openapi({ example: false }),
              category: z.string().exactOptional().openapi({ example: 'Search Engine' }),
              content_type: z
                .string()
                .exactOptional()
                .openapi({ example: 'text/html; charset=UTF-8' }),
              dns_valid: z.boolean().exactOptional().openapi({ example: true }),
              domain: z.string().exactOptional().openapi({ example: 'google.com' }),
              domain_age: z
                .object({
                  human: z.string().exactOptional().openapi({ example: '3 months ago' }),
                  iso: z.string().exactOptional().openapi({ example: '2019-09-09T16:40:34-04:00' }),
                  timestamp: z.number().exactOptional().openapi({ example: 1568061634 }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              domain_rank: z.number().exactOptional().openapi({ example: 1 }),
              ip_address: z.string().exactOptional().openapi({ example: '172.217.7.206' }),
              malware: z.boolean().exactOptional().openapi({ example: false }),
              message: z.string().exactOptional().openapi({ example: 'Success.' }),
              page_size: z.number().exactOptional().openapi({ example: 68553 }),
              parking: z.boolean().exactOptional().openapi({ example: false }),
              phishing: z.boolean().exactOptional().openapi({ example: false }),
              request_id: z.string().exactOptional().openapi({ example: '4ZGSfWu9RDf3oH' }),
              risk_score: z.number().exactOptional().openapi({ example: 0 }),
              server: z.string().exactOptional().openapi({ example: 'nginx' }),
              spamming: z.boolean().exactOptional().openapi({ example: false }),
              status_code: z.number().exactOptional().openapi({ example: 200 }),
              success: z.boolean().exactOptional().openapi({ example: true }),
              suspicious: z.boolean().exactOptional().openapi({ example: false }),
              unsafe: z.boolean().exactOptional().openapi({ example: true }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful response': {
              value: {
                adult: false,
                category: 'Search Engine',
                content_type: 'text/html; charset=UTF-8',
                dns_valid: true,
                domain: 'google.com',
                domain_age: {
                  human: '3 months ago',
                  iso: '2019-09-09T16:40:34-04:00',
                  timestamp: 1568061634,
                },
                domain_rank: 1,
                ip_address: '172.217.7.206',
                malware: false,
                message: 'Success.',
                page_size: 68553,
                parking: false,
                phishing: false,
                request_id: '4ZGSfWu9RDf3oH',
                risk_score: 0,
                server: 'nginx',
                spamming: false,
                status_code: 200,
                success: true,
                suspicious: false,
                unsafe: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Bad Request': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unexpected error',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                }),
              request_id: z.string().exactOptional().openapi({ example: '4OTORR352FU0p' }),
              success: z.boolean().exactOptional().openapi({ example: false }),
            })
            .openapi({ required: [] }),
          examples: {
            'Unexpected error': {
              value: {
                message:
                  'You have insufficient credits to make this query. Please contact IPQualityScore support if this error persists.',
                request_id: '4OTORR352FU0p',
                success: false,
              },
            },
          },
        },
      },
    },
  },
})

import { createRoute, z } from '@hono/zod-openapi'

const ApplyYaraRuleSchema = z
  .object({
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'error message, if YARA failed' }),
    is_success: z.boolean().openapi({ description: 'is operation success' }),
    matched_yara_rules: z
      .array(
        z.array(
          z
            .object({
              rule: z.string().openapi({ description: 'matched rule' }),
              string_information: z
                .array(z.string())
                .openapi({ description: 'string which matched during the scanning' }),
            })
            .openapi({
              description: 'Yara rule meta data section',
              required: ['rule', 'string_information'],
            }),
        ),
      )
      .exactOptional()
      .openapi({ description: 'matched YARA rules' }),
    yara_command: z.string().openapi({ description: 'Yara command executed' }),
  })
  .openapi({ required: ['yara_command', 'is_success'] })
  .openapi('ApplyYaraRule')

const ErrorSchema = z
  .object({ message: z.string(), status: z.int() })
  .openapi({ required: ['status', 'message'] })
  .openapi('Error')

const YaraSchema = z
  .object({
    meta: z
      .object({
        date: z.string().openapi({ description: 'Date of the YARA rule created' }),
        md5sum: z.string().openapi({ description: 'MD5 check sum' }),
        sha256sum: z.string().openapi({ description: 'SHA 256 check sum' }),
        sha512sum: z.string().openapi({ description: 'SHA 512 check sum' }),
      })
      .openapi({
        description: 'Yara rule meta data section',
        required: ['date', 'md5sum', 'sha256sum', 'sha512sum'],
      }),
    name: z.string().openapi({ description: 'Yara rule name' }),
    strings: z
      .array(z.array(z.string()).length(2))
      .openapi({ description: 'Yara rule string section' }),
  })
  .openapi({ required: ['name', 'meta', 'strings'] })
  .openapi('Yara')

export const postApplyYaraRulesRoute = createRoute({
  method: 'post',
  path: '/apply-yara-rules',
  description: 'apply given YARA rules to the given executable. (upto 10 rules)',
  operationId: 'applyYaraRules',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().openapi({ type: 'string', format: 'binary', description: 'file' }),
              is_unpacking_required: z.enum(['true', 'false']).exactOptional(),
              rules: z.preprocess(
                (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                z
                  .array(z.string().openapi({ description: 'Rule as BASE-64 encoded string' }))
                  .min(1)
                  .max(10),
              ),
            })
            .openapi({ required: ['file', 'rules'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Yara rules',
      content: {
        '*/*': {
          schema: z
            .object({ result: ApplyYaraRuleSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'request error', content: { '*/*': { schema: ErrorSchema } } },
    500: { description: 'server error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const headCleanRoute = createRoute({
  method: 'head',
  path: '/clean',
  description: 'clean up the uploaded files',
  operationId: 'clean',
  responses: {
    204: { description: 'Ok' },
    500: { description: 'server error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const postEmulationOutputRoute = createRoute({
  method: 'post',
  path: '/emulation-output',
  description: 'try to get the emulation output after unpacking the file',
  operationId: 'emulationOutput',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().openapi({ type: 'string', format: 'binary', description: 'file' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'emulation output after unpacking the file',
      content: {
        '*/*': {
          schema: z.object({ output: z.array(z.string()) }).openapi({ required: ['output'] }),
        },
      },
    },
    400: { description: 'request error', content: { '*/*': { schema: ErrorSchema } } },
    500: { description: 'server error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const postGeneratePartialYaraRulesRoute = createRoute({
  method: 'post',
  path: '/generate-partial-yara-rules',
  description:
    'generate partial YARA rules for give executable. (Rule without the condition section)',
  operationId: 'generatePartialYaraRule',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().openapi({ type: 'string', format: 'binary', description: 'file' }),
              is_unpacking_required: z.enum(['true', 'false']).exactOptional(),
              minimum_string_length: z.string().exactOptional(),
              strings_to_ignore: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()).min(0).max(1000),
                )
                .exactOptional(),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Yara rules',
      content: {
        '*/*': { schema: z.object({ rule: YaraSchema.exactOptional() }).openapi({ required: [] }) },
      },
    },
    400: { description: 'request error', content: { '*/*': { schema: ErrorSchema } } },
    500: { description: 'server error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

export const postUnpackRoute = createRoute({
  method: 'post',
  path: '/unpack',
  description: 'try to unpack the given file',
  operationId: 'unpack',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.file().openapi({ type: 'string', format: 'binary', description: 'file' }),
            })
            .openapi({ required: ['file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: { '*/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    400: { description: 'request error', content: { '*/*': { schema: ErrorSchema } } },
    500: { description: 'server error', content: { '*/*': { schema: ErrorSchema } } },
  },
})

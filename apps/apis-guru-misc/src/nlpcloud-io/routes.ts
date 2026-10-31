import { createRoute, z } from '@hono/zod-openapi'

const ArcSchema = z
  .object({
    dir: z.string().openapi({ title: 'Dir' }),
    end: z.int().openapi({ title: 'End' }),
    label: z.string().openapi({ title: 'Label' }),
    start: z.int().openapi({ title: 'Start' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ required: ['start', 'end', 'label', 'text', 'dir'], title: 'Arc' })
  .openapi('Arc')

const WordSchema = z
  .object({
    tag: z.string().openapi({ title: 'Tag' }),
    text: z.string().openapi({ title: 'Text' }),
  })
  .openapi({ required: ['text', 'tag'], title: 'Word' })
  .openapi('Word')

const DependenciesOutSchema = z
  .object({
    arcs: z.array(ArcSchema).openapi({ title: 'Arcs' }),
    words: z.array(WordSchema).openapi({ title: 'Words' }),
  })
  .openapi({ required: ['words', 'arcs'], title: 'DependenciesOut' })
  .openapi('DependenciesOut')

const EntityOutSchema = z
  .object({
    end: z.int().openapi({ title: 'End' }),
    start: z.int().openapi({ title: 'Start' }),
    text: z.string().openapi({ title: 'Text' }),
    type: z.string().openapi({ title: 'Type' }),
  })
  .openapi({ required: ['start', 'end', 'type', 'text'], title: 'EntityOut' })
  .openapi('EntityOut')

const EntitiesOutSchema = z
  .object({ entities: z.array(EntityOutSchema).openapi({ title: 'Entities' }) })
  .openapi({ required: ['entities'], title: 'EntitiesOut' })
  .openapi('EntitiesOut')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const HTTPValidationErrorSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'HTTPValidationError', required: [] })
  .openapi('HTTPValidationError')

const SentenceDependencyOutSchema = z
  .object({
    dependencies: DependenciesOutSchema,
    sentence: z.string().openapi({ title: 'Sentence' }),
  })
  .openapi({ required: ['sentence', 'dependencies'], title: 'SentenceDependencyOut' })
  .openapi('SentenceDependencyOut')

const SentenceDependenciesOutSchema = z
  .object({
    sentence_dependencies: z
      .array(SentenceDependencyOutSchema)
      .openapi({ title: 'Sentence Dependencies' }),
  })
  .openapi({ required: ['sentence_dependencies'], title: 'SentenceDependenciesOut' })
  .openapi('SentenceDependenciesOut')

const UserRequestInSchema = z
  .object({ text: z.string().openapi({ title: 'Text' }) })
  .openapi({ required: ['text'], title: 'UserRequestIn' })
  .openapi('UserRequestIn')

const VersionOutSchema = z
  .object({ spacy: z.string().openapi({ title: 'Spacy' }) })
  .openapi({ required: ['spacy'], title: 'VersionOut' })
  .openapi('VersionOut')

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getV1EnCoreWebSmIndexRoute = createRoute({
  method: 'get',
  path: '/v1/en_core_web_sm/',
  summary: 'Read Root',
  operationId: 'read_root_v1_en_core_web_sm__get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: z.any() } },
    },
  },
})

export const postV1EnCoreWebSmDependenciesRoute = createRoute({
  method: 'post',
  path: '/v1/en_core_web_sm/dependencies',
  summary: 'Read Dependencies',
  operationId: 'read_dependencies_v1_en_core_web_sm_dependencies_post',
  request: {
    body: { content: { 'application/json': { schema: UserRequestInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: DependenciesOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1EnCoreWebSmEntitiesRoute = createRoute({
  method: 'post',
  path: '/v1/en_core_web_sm/entities',
  summary: 'Read Entities',
  operationId: 'read_entities_v1_en_core_web_sm_entities_post',
  request: {
    body: { content: { 'application/json': { schema: UserRequestInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: EntitiesOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const postV1EnCoreWebSmSentenceDependenciesRoute = createRoute({
  method: 'post',
  path: '/v1/en_core_web_sm/sentence-dependencies',
  summary: 'Read Sentence Dependencies',
  operationId: 'read_sentence_dependencies_v1_en_core_web_sm_sentence_dependencies_post',
  request: {
    body: { content: { 'application/json': { schema: UserRequestInSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: SentenceDependenciesOutSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: HTTPValidationErrorSchema } },
    },
  },
})

export const getV1EnCoreWebSmVersionRoute = createRoute({
  method: 'get',
  path: '/v1/en_core_web_sm/version',
  summary: 'Read Version',
  operationId: 'read_version_v1_en_core_web_sm_version_get',
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: VersionOutSchema } },
    },
  },
})

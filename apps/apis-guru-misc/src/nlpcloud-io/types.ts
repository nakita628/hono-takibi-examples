type UserRequestIn = { text: string }
type Arc = { dir: string; end: number; label: string; start: number; text: string }
type Word = { tag: string; text: string }
type DependenciesOut = { arcs: Arc[]; words: Word[] }
type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type EntityOut = { end: number; start: number; text: string; type: string }
type EntitiesOut = { entities: EntityOut[] }
type SentenceDependencyOut = { dependencies: DependenciesOut; sentence: string }
type SentenceDependenciesOut = { sentence_dependencies: SentenceDependencyOut[] }
type VersionOut = { spacy: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/en_core_web_sm/': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/en_core_web_sm/dependencies': {
      $post:
        | {
            input: { json: UserRequestIn }
            output: DependenciesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserRequestIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/en_core_web_sm/entities': {
      $post:
        | { input: { json: UserRequestIn }; output: EntitiesOut; outputFormat: 'json'; status: 200 }
        | {
            input: { json: UserRequestIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/en_core_web_sm/sentence-dependencies': {
      $post:
        | {
            input: { json: UserRequestIn }
            output: SentenceDependenciesOut
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserRequestIn }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/en_core_web_sm/version': {
      $get: { input: {}; output: VersionOut; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes

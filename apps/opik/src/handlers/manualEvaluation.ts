import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1PrivateManualEvaluationSpansRoute,
  postV1PrivateManualEvaluationThreadsRoute,
  postV1PrivateManualEvaluationTracesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manualEvaluationHandler = app
  .openapi(postV1PrivateManualEvaluationSpansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateManualEvaluationThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateManualEvaluationTracesRoute, (c) => {
    throw new Error('Not implemented')
  })

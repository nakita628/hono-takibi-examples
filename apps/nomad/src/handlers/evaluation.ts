import { OpenAPIHono } from '@hono/zod-openapi'
import { getEvaluationEvalIDAllocationsRoute, getEvaluationEvalIDRoute } from '../routes'

const app = new OpenAPIHono()

export const evaluationHandler = app
  .openapi(getEvaluationEvalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvaluationEvalIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })

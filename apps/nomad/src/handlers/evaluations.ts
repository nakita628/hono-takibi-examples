import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEvaluationEvalIDAllocationsRoute,
  getEvaluationEvalIDRoute,
  getEvaluationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evaluationsHandler = app
  .openapi(getEvaluationEvalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvaluationEvalIDAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })

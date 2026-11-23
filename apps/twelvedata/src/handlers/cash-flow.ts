import { OpenAPIHono } from '@hono/zod-openapi'
import { getCashFlowConsolidatedRoute, getCashFlowRoute } from '../routes'

const app = new OpenAPIHono()

export const cashFlowHandler = app
  .openapi(getCashFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCashFlowConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })

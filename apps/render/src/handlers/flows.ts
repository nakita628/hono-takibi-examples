import { OpenAPIHono } from '@hono/zod-openapi'
import { getFlowsFlowIdRoute, getFlowsRoute } from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(getFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsFlowIdRoute, (c) => {
    throw new Error('Not implemented')
  })

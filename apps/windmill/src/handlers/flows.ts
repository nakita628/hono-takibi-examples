import { OpenAPIHono } from '@hono/zod-openapi'
import { getFlowsHubGetIdRoute, getFlowsHubListRoute } from '../routes'

const app = new OpenAPIHono()

export const flowsHandler = app
  .openapi(getFlowsHubListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlowsHubGetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

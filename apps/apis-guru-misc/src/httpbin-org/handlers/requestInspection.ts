import { OpenAPIHono } from '@hono/zod-openapi'
import { getHeadersRoute, getIpRoute, getUserAgentRoute } from '../routes'

const app = new OpenAPIHono()

export const requestInspectionHandler = app
  .openapi(getHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserAgentRoute, (c) => {
    throw new Error('Not implemented')
  })

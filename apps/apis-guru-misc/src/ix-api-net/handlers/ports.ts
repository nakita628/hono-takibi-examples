import { OpenAPIHono } from '@hono/zod-openapi'
import { getPortsIdRoute, getPortsRoute } from '../routes'

const app = new OpenAPIHono()

export const portsHandler = app
  .openapi(getPortsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

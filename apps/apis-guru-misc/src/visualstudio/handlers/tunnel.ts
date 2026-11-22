import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1TunnelEnvironmentIdPortInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const tunnelHandler = app.openapi(getApiV1TunnelEnvironmentIdPortInfoRoute, (c) => {
  throw new Error('Not implemented')
})

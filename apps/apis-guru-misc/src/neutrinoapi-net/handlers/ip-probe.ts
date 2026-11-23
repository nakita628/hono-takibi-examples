import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpProbeRoute } from '../routes'

const app = new OpenAPIHono()

export const ipProbeHandler = app.openapi(getIpProbeRoute, (c) => {
  throw new Error('Not implemented')
})

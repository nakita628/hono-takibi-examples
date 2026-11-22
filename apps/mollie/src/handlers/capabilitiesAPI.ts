import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2CapabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const capabilitiesAPIHandler = app.openapi(getV2CapabilitiesRoute, (c) => {
  throw new Error('Not implemented')
})

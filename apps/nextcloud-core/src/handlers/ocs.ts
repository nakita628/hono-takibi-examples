import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpCloudCapabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app.openapi(getOcsV2PhpCloudCapabilitiesRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2RemoteAuthenticationsRoute } from '../routes'

const app = new OpenAPIHono()

export const remoteAuthenticationsHandler = app.openapi(getApiV2RemoteAuthenticationsRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeactivateMFADeviceRoute, postActionDeactivateMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeactivateMfaDeviceHandler = app
  .openapi(getActionDeactivateMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeactivateMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

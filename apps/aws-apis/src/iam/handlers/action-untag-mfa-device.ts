import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagMFADeviceRoute, postActionUntagMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUntagMfaDeviceHandler = app
  .openapi(getActionUntagMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

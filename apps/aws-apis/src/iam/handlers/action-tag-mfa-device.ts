import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagMFADeviceRoute, postActionTagMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagMfaDeviceHandler = app
  .openapi(getActionTagMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

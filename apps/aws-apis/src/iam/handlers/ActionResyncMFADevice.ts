import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResyncMFADeviceRoute, postActionResyncMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionResyncMFADeviceHandler = app
  .openapi(getActionResyncMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResyncMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

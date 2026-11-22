import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetMFADeviceRoute, postActionGetMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetMFADeviceHandler = app
  .openapi(getActionGetMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

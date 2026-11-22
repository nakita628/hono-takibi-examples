import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListMFADevicesRoute, postActionListMFADevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListMFADevicesHandler = app
  .openapi(getActionListMFADevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListMFADevicesRoute, (c) => {
    throw new Error('Not implemented')
  })

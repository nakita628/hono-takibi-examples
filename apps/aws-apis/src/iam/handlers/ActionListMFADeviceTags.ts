import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListMFADeviceTagsRoute, postActionListMFADeviceTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListMFADeviceTagsHandler = app
  .openapi(getActionListMFADeviceTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListMFADeviceTagsRoute, (c) => {
    throw new Error('Not implemented')
  })

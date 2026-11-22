import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionEnableMFADeviceRoute, postActionEnableMFADeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionEnableMFADeviceHandler = app
  .openapi(getActionEnableMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableMFADeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

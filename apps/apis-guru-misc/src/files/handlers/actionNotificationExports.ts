import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionNotificationExportsIdRoute, postActionNotificationExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionNotificationExportsHandler = app
  .openapi(postActionNotificationExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionNotificationExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkIntlVerificationsRoute, postIntlVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const intlVerificationsHandler = app
  .openapi(postBulkIntlVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntlVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })

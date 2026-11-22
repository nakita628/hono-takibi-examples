import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkUsVerificationsRoute, postUsVerificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const usVerificationsHandler = app
  .openapi(postBulkUsVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })

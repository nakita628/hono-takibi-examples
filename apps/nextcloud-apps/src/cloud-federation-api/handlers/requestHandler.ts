import { OpenAPIHono } from '@hono/zod-openapi'
import { postIndexPhpOcmNotificationsRoute, postIndexPhpOcmSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const requestHandlerHandler = app
  .openapi(postIndexPhpOcmSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexPhpOcmNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })

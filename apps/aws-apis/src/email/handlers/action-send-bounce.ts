import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSendBounceRoute, postActionSendBounceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSendBounceHandler = app
  .openapi(getActionSendBounceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendBounceRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSendRawEmailRoute, postActionSendRawEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSendRawEmailHandler = app
  .openapi(getActionSendRawEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendRawEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSendEmailRoute, postActionSendEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSendEmailHandler = app
  .openapi(getActionSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

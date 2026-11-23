import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSendTemplatedEmailRoute, postActionSendTemplatedEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSendTemplatedEmailHandler = app
  .openapi(getActionSendTemplatedEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendTemplatedEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

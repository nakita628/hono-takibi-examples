import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnsubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const unsubscribeHandler = app.openapi(postUnsubscribeRoute, (c) => {
  throw new Error('Not implemented')
})

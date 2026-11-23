import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const subscribeHandler = app.openapi(postSubscribeRoute, (c) => {
  throw new Error('Not implemented')
})

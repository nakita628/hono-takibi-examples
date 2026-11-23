import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendAnimationRoute } from '../routes'

const app = new OpenAPIHono()

export const sendAnimationHandler = app.openapi(postSendAnimationRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getLongpollRoute } from '../routes'

const app = new OpenAPIHono()

export const longpollHandler = app.openapi(getLongpollRoute, (c) => {
  throw new Error('Not implemented')
})

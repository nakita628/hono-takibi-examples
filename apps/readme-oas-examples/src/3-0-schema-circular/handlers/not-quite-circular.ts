import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotQuiteCircularRoute } from '../routes'

const app = new OpenAPIHono()

export const notQuiteCircularHandler = app.openapi(postNotQuiteCircularRoute, (c) => {
  throw new Error('Not implemented')
})

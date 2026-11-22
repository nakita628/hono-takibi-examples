import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmojisRoute } from '../routes'

const app = new OpenAPIHono()

export const emojisHandler = app.openapi(getEmojisRoute, (c) => {
  throw new Error('Not implemented')
})

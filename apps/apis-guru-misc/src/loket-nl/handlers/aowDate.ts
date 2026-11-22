import { OpenAPIHono } from '@hono/zod-openapi'
import { getAowDateRoute } from '../routes'

const app = new OpenAPIHono()

export const aowDateHandler = app.openapi(getAowDateRoute, (c) => {
  throw new Error('Not implemented')
})

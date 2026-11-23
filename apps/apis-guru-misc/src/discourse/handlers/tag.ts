import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagNameJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app.openapi(getTagNameJsonRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getSearchCodeRoute, (c) => {
  throw new Error('Not implemented')
})

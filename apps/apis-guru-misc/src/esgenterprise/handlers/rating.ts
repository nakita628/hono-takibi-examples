import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const ratingHandler = app.openapi(getSearchRoute, (c) => {
  throw new Error('Not implemented')
})

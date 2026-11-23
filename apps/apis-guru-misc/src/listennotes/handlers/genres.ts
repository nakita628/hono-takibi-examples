import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app.openapi(getGenresRoute, (c) => {
  throw new Error('Not implemented')
})

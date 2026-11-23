import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app.openapi(getGenresTypeRoute, (c) => {
  throw new Error('Not implemented')
})

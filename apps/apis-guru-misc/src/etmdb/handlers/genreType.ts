import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1GenreTypeSearchGenreDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const genreTypeHandler = app.openapi(getApiV1GenreTypeSearchGenreDescriptionRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1FilmographyTypeSearchFilmographyDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const filmographyTypeHandler = app.openapi(
  getApiV1FilmographyTypeSearchFilmographyDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

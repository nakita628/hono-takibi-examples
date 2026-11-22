import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1FilmographySearchallParamRoute,
  getApiV1FilmographySearchMovieTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filmographyHandler = app
  .openapi(getApiV1FilmographySearchMovieTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FilmographySearchallParamRoute, (c) => {
    throw new Error('Not implemented')
  })

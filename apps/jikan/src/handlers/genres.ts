import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenresAnimeRoute, getGenresMangaRoute } from '../routes'

const app = new OpenAPIHono()

export const genresHandler = app
  .openapi(getGenresAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenresMangaRoute, (c) => {
    throw new Error('Not implemented')
  })

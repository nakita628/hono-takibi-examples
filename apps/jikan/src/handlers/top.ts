import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTopAnimeRoute,
  getTopCharactersRoute,
  getTopMangaRoute,
  getTopPeopleRoute,
  getTopReviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const topHandler = app
  .openapi(getTopAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopMangaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopCharactersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })

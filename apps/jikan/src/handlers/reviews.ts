import { OpenAPIHono } from '@hono/zod-openapi'
import { getReviewsAnimeRoute, getReviewsMangaRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewsHandler = app
  .openapi(getReviewsAnimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReviewsMangaRoute, (c) => {
    throw new Error('Not implemented')
  })

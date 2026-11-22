import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRatingOverallChapterRoute,
  getApiRatingOverallSeriesRoute,
  postApiRatingChapterRoute,
  postApiRatingSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ratingHandler = app
  .openapi(postApiRatingSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRatingChapterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingOverallSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRatingOverallChapterRoute, (c) => {
    throw new Error('Not implemented')
  })

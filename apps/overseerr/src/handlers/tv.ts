import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTvTvIdRatingsRoute,
  getTvTvIdRecommendationsRoute,
  getTvTvIdRoute,
  getTvTvIdSeasonSeasonIdRoute,
  getTvTvIdSimilarRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tvHandler = app
  .openapi(getTvTvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTvTvIdSeasonSeasonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTvTvIdRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTvTvIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTvTvIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })

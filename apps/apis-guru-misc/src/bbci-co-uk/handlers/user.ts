import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserPurchasesRoute, getUserRecommendationsRoute, getUserWatchingRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserPurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserWatchingRoute, (c) => {
    throw new Error('Not implemented')
  })

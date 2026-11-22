import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BetaAppReviewDetailsIdAppRoute,
  getV1BetaAppReviewDetailsIdRoute,
  getV1BetaAppReviewDetailsRoute,
  patchV1BetaAppReviewDetailsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaAppReviewDetailsHandler = app
  .openapi(getV1BetaAppReviewDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BetaAppReviewDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BetaAppReviewDetailsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })

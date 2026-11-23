import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCodereviewsCodeReviewArnRecommendationsRoute,
  getCodereviewsCodeReviewArnRoute,
  postCodereviewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codereviewsHandler = app
  .openapi(postCodereviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCodereviewsCodeReviewArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCodereviewsCodeReviewArnRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })

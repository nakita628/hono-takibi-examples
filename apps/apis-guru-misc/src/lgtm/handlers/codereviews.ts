import { OpenAPIHono } from '@hono/zod-openapi'
import { getCodereviewsReviewIdRoute, postCodereviewsProjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const codereviewsHandler = app
  .openapi(postCodereviewsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCodereviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })

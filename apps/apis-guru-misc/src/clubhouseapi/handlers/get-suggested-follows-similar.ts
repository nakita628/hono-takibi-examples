import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSuggestedFollowsSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedFollowsSimilarHandler = app.openapi(
  postGetSuggestedFollowsSimilarRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

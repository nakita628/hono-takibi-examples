import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSuggestedFollowsFriendsOnlyRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedFollowsFriendsOnlyHandler = app.openapi(
  postGetSuggestedFollowsFriendsOnlyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

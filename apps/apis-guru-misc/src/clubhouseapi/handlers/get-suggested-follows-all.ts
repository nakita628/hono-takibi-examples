import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetSuggestedFollowsAllRoute } from '../routes'

const app = new OpenAPIHono()

export const getSuggestedFollowsAllHandler = app.openapi(getGetSuggestedFollowsAllRoute, (c) => {
  throw new Error('Not implemented')
})

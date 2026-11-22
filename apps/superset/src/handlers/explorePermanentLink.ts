import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ExplorePermalinkKeyRoute, postApiV1ExplorePermalinkRoute } from '../routes'

const app = new OpenAPIHono()

export const explorePermanentLinkHandler = app
  .openapi(postApiV1ExplorePermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ExplorePermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

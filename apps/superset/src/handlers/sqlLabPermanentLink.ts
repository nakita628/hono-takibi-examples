import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SqllabPermalinkKeyRoute, postApiV1SqllabPermalinkRoute } from '../routes'

const app = new OpenAPIHono()

export const sqlLabPermanentLinkHandler = app
  .openapi(postApiV1SqllabPermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SqllabPermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

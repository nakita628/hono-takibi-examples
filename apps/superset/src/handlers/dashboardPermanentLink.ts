import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1DashboardPermalinkKeyRoute, postApiV1DashboardPkPermalinkRoute } from '../routes'

const app = new OpenAPIHono()

export const dashboardPermanentLinkHandler = app
  .openapi(getApiV1DashboardPermalinkKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DashboardPkPermalinkRoute, (c) => {
    throw new Error('Not implemented')
  })

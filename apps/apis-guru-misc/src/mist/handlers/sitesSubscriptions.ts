import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdSubscriptionsRoute,
  postApiV1SitesSiteIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSubscriptionsHandler = app
  .openapi(deleteApiV1SitesSiteIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdRoute,
  getApiV1SitesSiteIdRoute,
  putApiV1SitesSiteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(deleteApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })

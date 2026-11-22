import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdPsksPskIdRoute,
  getApiV1SitesSiteIdPsksPskIdRoute,
  getApiV1SitesSiteIdPsksRoute,
  postApiV1SitesSiteIdPsksImportRoute,
  postApiV1SitesSiteIdPsksRoute,
  putApiV1SitesSiteIdPsksPskIdRoute,
  putApiV1SitesSiteIdPsksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesPsksHandler = app
  .openapi(getApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdPsksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPsksImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdPsksPskIdRoute, (c) => {
    throw new Error('Not implemented')
  })

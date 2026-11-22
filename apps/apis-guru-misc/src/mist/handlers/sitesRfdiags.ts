import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
  getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRoute,
  getApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
  getApiV1SitesSiteIdRfdiagsRoute,
  postApiV1SitesSiteIdRfdiagsRfdiagIdStopRoute,
  postApiV1SitesSiteIdRfdiagsRoute,
  putApiV1SitesSiteIdRfdiagsRfdiagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRfdiagsHandler = app
  .openapi(getApiV1SitesSiteIdRfdiagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRfdiagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdRfdiagsRfdiagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRfdiagsRfdiagIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRfdiagsRfdiagIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })

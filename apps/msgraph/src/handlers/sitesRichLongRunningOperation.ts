import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  getSitesSiteIdGetByPathPathPathOperationsRoute,
  getSitesSiteIdOperationsCountRoute,
  getSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  getSitesSiteIdOperationsRoute,
  patchSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  postSitesSiteIdGetByPathPathPathOperationsRoute,
  postSitesSiteIdOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRichLongRunningOperationHandler = app
  .openapi(getSitesSiteIdGetByPathPathPathOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGetByPathPathPathOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

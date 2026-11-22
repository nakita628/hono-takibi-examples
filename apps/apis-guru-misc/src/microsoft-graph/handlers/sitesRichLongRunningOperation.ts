import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  getSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  getSitesSiteIdOperationsRoute,
  patchSitesSiteIdOperationsRichLongRunningOperationIdRoute,
  postSitesSiteIdOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRichLongRunningOperationHandler = app
  .openapi(getSitesSiteIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdOperationsRichLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

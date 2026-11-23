import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingEmails202609EmailIdRoute,
  getMarketingEmails202609EmailIdAbTestGetVariationRoute,
  getMarketingEmails202609EmailIdDraftRoute,
  getMarketingEmails202609EmailIdRevisionsRevisionIdRoute,
  getMarketingEmails202609EmailIdRevisionsRoute,
  getMarketingEmails202609EmailIdRoute,
  getMarketingEmails202609Route,
  getMarketingEmails202609StatisticsHistogramRoute,
  getMarketingEmails202609StatisticsListRoute,
  patchMarketingEmails202609EmailIdDraftRoute,
  patchMarketingEmails202609EmailIdRoute,
  postMarketingEmails202609AbTestCreateVariationRoute,
  postMarketingEmails202609CloneRoute,
  postMarketingEmails202609EmailIdDraftResetRoute,
  postMarketingEmails202609EmailIdPublishRoute,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRoute,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRoute,
  postMarketingEmails202609EmailIdUnpublishRoute,
  postMarketingEmails202609Route,
} from './routes'
import {
  deleteMarketingEmails202609EmailIdRouteHandler,
  getMarketingEmails202609EmailIdAbTestGetVariationRouteHandler,
  getMarketingEmails202609EmailIdDraftRouteHandler,
  getMarketingEmails202609EmailIdRevisionsRevisionIdRouteHandler,
  getMarketingEmails202609EmailIdRevisionsRouteHandler,
  getMarketingEmails202609EmailIdRouteHandler,
  getMarketingEmails202609RouteHandler,
  getMarketingEmails202609StatisticsHistogramRouteHandler,
  getMarketingEmails202609StatisticsListRouteHandler,
  patchMarketingEmails202609EmailIdDraftRouteHandler,
  patchMarketingEmails202609EmailIdRouteHandler,
  postMarketingEmails202609AbTestCreateVariationRouteHandler,
  postMarketingEmails202609CloneRouteHandler,
  postMarketingEmails202609EmailIdDraftResetRouteHandler,
  postMarketingEmails202609EmailIdPublishRouteHandler,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRouteHandler,
  postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRouteHandler,
  postMarketingEmails202609EmailIdUnpublishRouteHandler,
  postMarketingEmails202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMarketingEmails202609Route, getMarketingEmails202609RouteHandler)
  .openapi(postMarketingEmails202609Route, postMarketingEmails202609RouteHandler)
  .openapi(
    postMarketingEmails202609AbTestCreateVariationRoute,
    postMarketingEmails202609AbTestCreateVariationRouteHandler,
  )
  .openapi(postMarketingEmails202609CloneRoute, postMarketingEmails202609CloneRouteHandler)
  .openapi(
    getMarketingEmails202609StatisticsHistogramRoute,
    getMarketingEmails202609StatisticsHistogramRouteHandler,
  )
  .openapi(
    getMarketingEmails202609StatisticsListRoute,
    getMarketingEmails202609StatisticsListRouteHandler,
  )
  .openapi(getMarketingEmails202609EmailIdRoute, getMarketingEmails202609EmailIdRouteHandler)
  .openapi(deleteMarketingEmails202609EmailIdRoute, deleteMarketingEmails202609EmailIdRouteHandler)
  .openapi(patchMarketingEmails202609EmailIdRoute, patchMarketingEmails202609EmailIdRouteHandler)
  .openapi(
    getMarketingEmails202609EmailIdAbTestGetVariationRoute,
    getMarketingEmails202609EmailIdAbTestGetVariationRouteHandler,
  )
  .openapi(
    getMarketingEmails202609EmailIdDraftRoute,
    getMarketingEmails202609EmailIdDraftRouteHandler,
  )
  .openapi(
    patchMarketingEmails202609EmailIdDraftRoute,
    patchMarketingEmails202609EmailIdDraftRouteHandler,
  )
  .openapi(
    postMarketingEmails202609EmailIdDraftResetRoute,
    postMarketingEmails202609EmailIdDraftResetRouteHandler,
  )
  .openapi(
    postMarketingEmails202609EmailIdPublishRoute,
    postMarketingEmails202609EmailIdPublishRouteHandler,
  )
  .openapi(
    getMarketingEmails202609EmailIdRevisionsRoute,
    getMarketingEmails202609EmailIdRevisionsRouteHandler,
  )
  .openapi(
    getMarketingEmails202609EmailIdRevisionsRevisionIdRoute,
    getMarketingEmails202609EmailIdRevisionsRevisionIdRouteHandler,
  )
  .openapi(
    postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRoute,
    postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreRouteHandler,
  )
  .openapi(
    postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRoute,
    postMarketingEmails202609EmailIdRevisionsRevisionIdRestoreToDraftRouteHandler,
  )
  .openapi(
    postMarketingEmails202609EmailIdUnpublishRoute,
    postMarketingEmails202609EmailIdUnpublishRouteHandler,
  )

export default app

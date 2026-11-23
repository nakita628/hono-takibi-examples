import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1BillsBillIdNewsArticlesRoute,
  getApiV1BillsBillIdPublicationsRoute,
  getApiV1BillsBillIdRoute,
  getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute,
  getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute,
  getApiV1BillsBillIdStagesBillStageIdRoute,
  getApiV1BillsBillIdStagesRoute,
  getApiV1BillsBillIdStagesStageIdPublicationsRoute,
  getApiV1BillsRoute,
  getApiV1BillTypesRoute,
  getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute,
  getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute,
  getApiV1PublicationTypesRoute,
  getApiV1RssAllbillsRssRoute,
  getApiV1RssBillsIdRssRoute,
  getApiV1RssPrivatebillsRssRoute,
  getApiV1RssPublicbillsRssRoute,
  getApiV1SittingsRoute,
  getApiV1StagesRoute,
} from './routes'
import {
  getApiV1BillsBillIdNewsArticlesRouteHandler,
  getApiV1BillsBillIdPublicationsRouteHandler,
  getApiV1BillsBillIdRouteHandler,
  getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRouteHandler,
  getApiV1BillsBillIdStagesBillStageIdAmendmentsRouteHandler,
  getApiV1BillsBillIdStagesBillStageIdRouteHandler,
  getApiV1BillsBillIdStagesRouteHandler,
  getApiV1BillsBillIdStagesStageIdPublicationsRouteHandler,
  getApiV1BillsRouteHandler,
  getApiV1BillTypesRouteHandler,
  getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRouteHandler,
  getApiV1PublicationsPublicationIdDocumentsDocumentIdRouteHandler,
  getApiV1PublicationTypesRouteHandler,
  getApiV1RssAllbillsRssRouteHandler,
  getApiV1RssBillsIdRssRouteHandler,
  getApiV1RssPrivatebillsRssRouteHandler,
  getApiV1RssPublicbillsRssRouteHandler,
  getApiV1SittingsRouteHandler,
  getApiV1StagesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1BillTypesRoute, getApiV1BillTypesRouteHandler)
  .openapi(getApiV1BillsRoute, getApiV1BillsRouteHandler)
  .openapi(getApiV1BillsBillIdRoute, getApiV1BillsBillIdRouteHandler)
  .openapi(getApiV1BillsBillIdNewsArticlesRoute, getApiV1BillsBillIdNewsArticlesRouteHandler)
  .openapi(getApiV1BillsBillIdPublicationsRoute, getApiV1BillsBillIdPublicationsRouteHandler)
  .openapi(getApiV1BillsBillIdStagesRoute, getApiV1BillsBillIdStagesRouteHandler)
  .openapi(
    getApiV1BillsBillIdStagesBillStageIdRoute,
    getApiV1BillsBillIdStagesBillStageIdRouteHandler,
  )
  .openapi(
    getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute,
    getApiV1BillsBillIdStagesBillStageIdAmendmentsRouteHandler,
  )
  .openapi(
    getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute,
    getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRouteHandler,
  )
  .openapi(
    getApiV1BillsBillIdStagesStageIdPublicationsRoute,
    getApiV1BillsBillIdStagesStageIdPublicationsRouteHandler,
  )
  .openapi(getApiV1PublicationTypesRoute, getApiV1PublicationTypesRouteHandler)
  .openapi(
    getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute,
    getApiV1PublicationsPublicationIdDocumentsDocumentIdRouteHandler,
  )
  .openapi(
    getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute,
    getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRouteHandler,
  )
  .openapi(getApiV1RssBillsIdRssRoute, getApiV1RssBillsIdRssRouteHandler)
  .openapi(getApiV1RssAllbillsRssRoute, getApiV1RssAllbillsRssRouteHandler)
  .openapi(getApiV1RssPrivatebillsRssRoute, getApiV1RssPrivatebillsRssRouteHandler)
  .openapi(getApiV1RssPublicbillsRssRoute, getApiV1RssPublicbillsRssRouteHandler)
  .openapi(getApiV1SittingsRoute, getApiV1SittingsRouteHandler)
  .openapi(getApiV1StagesRoute, getApiV1StagesRouteHandler)

export default app

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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1BillTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdNewsArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesBillStageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesBillStageIdAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillsBillIdStagesStageIdPublicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicationsPublicationIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssBillsIdRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssAllbillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssPrivatebillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssPublicbillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SittingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StagesRoute, (c) => {
    throw new Error('Not implemented')
  })

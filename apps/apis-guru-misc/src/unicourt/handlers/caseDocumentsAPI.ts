import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCaseCaseIdDocumentsRoute,
  getCaseDocumentCaseDocumentIdRoute,
  getCaseDocumentDownloadCaseDocumentIdRoute,
  getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute,
  getCaseDocumentOrderCallbacksRoute,
  putCaseDocumentOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseDocumentsAPIHandler = app
  .openapi(getCaseCaseIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentCaseDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentDownloadCaseDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCaseDocumentOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentOrderCallbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })

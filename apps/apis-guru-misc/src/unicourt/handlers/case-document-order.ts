import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute,
  getCaseDocumentOrderCallbacksRoute,
  putCaseDocumentOrderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseDocumentOrderHandler = app
  .openapi(putCaseDocumentOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentOrderCallbacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseDocumentOrderCallbacksCaseDocumentOrderCallbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })

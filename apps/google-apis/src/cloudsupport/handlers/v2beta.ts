import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2betaCaseClassificationsSearchRoute,
  getV2betaCasesSearchRoute,
  getV2betaNameDownloadRoute,
  getV2betaNameRoute,
  getV2betaParentAttachmentsRoute,
  getV2betaParentCasesRoute,
  getV2betaParentCommentsRoute,
  patchV2betaNameRoute,
  postV2betaNameCloseRoute,
  postV2betaNameEscalateRoute,
  postV2betaParentAttachmentsRoute,
  postV2betaParentCasesRoute,
  postV2betaParentCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2betaHandler = app
  .openapi(getV2betaCaseClassificationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaCasesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2betaNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaNameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaNameEscalateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaParentAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaParentCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2betaParentCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })

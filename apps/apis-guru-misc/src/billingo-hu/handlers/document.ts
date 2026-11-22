import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDocumentsIdPaymentsRoute,
  getDocumentsIdDownloadRoute,
  getDocumentsIdOnlineSzamlaRoute,
  getDocumentsIdPaymentsRoute,
  getDocumentsIdPublicUrlRoute,
  getDocumentsIdRoute,
  getDocumentsRoute,
  postDocumentsIdCancelRoute,
  postDocumentsIdCreateFromProformaRoute,
  postDocumentsIdSendRoute,
  postDocumentsRoute,
  putDocumentsIdPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const documentHandler = app
  .openapi(getDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsIdCreateFromProformaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdOnlineSzamlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDocumentsIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDocumentsIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDocumentsIdPublicUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDocumentsIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })

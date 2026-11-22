import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCreditNotesLagoIdMetadataKeyRoute,
  deleteCreditNotesLagoIdMetadataRoute,
  getCreditNotesLagoIdRoute,
  getCreditNotesRoute,
  patchCreditNotesLagoIdMetadataRoute,
  postCreditNotesEstimateRoute,
  postCreditNotesLagoIdDownloadRoute,
  postCreditNotesLagoIdDownloadXmlRoute,
  postCreditNotesLagoIdMetadataRoute,
  postCreditNotesRoute,
  putCreditNotesLagoIdRoute,
  putCreditNotesLagoIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditNotesHandler = app
  .openapi(postCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCreditNotesLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesLagoIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesLagoIdDownloadXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCreditNotesLagoIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditNotesLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCreditNotesLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCreditNotesLagoIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCreditNotesLagoIdMetadataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

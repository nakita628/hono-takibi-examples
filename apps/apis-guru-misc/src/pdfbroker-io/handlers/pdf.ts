import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPdfRoute,
  postApiPdfPdfconcatRoute,
  postApiPdfPdftoimageRoute,
  postApiPdfPdfwritestringRoute,
  postApiPdfWkhtmltopdfRoute,
  postApiPdfXslfoRoute,
  postApiPdfXslfowithtransformRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pdfHandler = app
  .openapi(getApiPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfPdfconcatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfPdftoimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfPdfwritestringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfWkhtmltopdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfXslfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPdfXslfowithtransformRoute, (c) => {
    throw new Error('Not implemented')
  })

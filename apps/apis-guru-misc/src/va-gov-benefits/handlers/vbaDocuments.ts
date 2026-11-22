import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUploadsIdDownloadRoute,
  getUploadsIdRoute,
  postUploadsReportRoute,
  postUploadsRoute,
  postUploadsValidateDocumentRoute,
  putPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vbaDocumentsHandler = app
  .openapi(putPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsValidateDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })

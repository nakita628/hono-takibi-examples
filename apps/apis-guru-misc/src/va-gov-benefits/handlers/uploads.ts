import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUploadsIdDownloadRoute,
  getUploadsIdRoute,
  postUploadsReportRoute,
  postUploadsRoute,
  postUploadsValidateDocumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
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

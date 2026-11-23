import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getZipDownloadsZipDownloadIdContentRoute,
  getZipDownloadsZipDownloadIdStatusRoute,
  postZipDownloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zipDownloadsHandler = app
  .openapi(postZipDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZipDownloadsZipDownloadIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZipDownloadsZipDownloadIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

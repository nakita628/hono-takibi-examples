import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionsVersionIdExportFormatRoute,
  postVersionsPublishAnonRoute,
  postVersionsVersionIdPublishRoute,
  putVersionsVersionIdImportRoute,
  putVersionsVersionIdUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(postVersionsPublishAnonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionsVersionIdExportFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVersionsVersionIdImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionsVersionIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVersionsVersionIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })

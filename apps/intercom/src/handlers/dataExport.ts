import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDownloadContentDataJobIdentifierRoute,
  getExportContentDataJobIdentifierRoute,
  postExportCancelJobIdentifierRoute,
  postExportContentDataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataExportHandler = app
  .openapi(postExportContentDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportContentDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportCancelJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDownloadContentDataJobIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })

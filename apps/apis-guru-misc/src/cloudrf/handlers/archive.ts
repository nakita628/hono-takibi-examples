import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArchiveDeleteNetworkRoute,
  getArchiveDeleteRoute,
  getArchiveExportRoute,
  getArchiveListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const archiveHandler = app
  .openapi(getArchiveDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveDeleteNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArchiveListRoute, (c) => {
    throw new Error('Not implemented')
  })

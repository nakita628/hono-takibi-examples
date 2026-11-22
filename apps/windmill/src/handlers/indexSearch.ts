import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexerDeleteIdxNameRoute,
  getIndexerStatusRoute,
  getIndexerStorageRoute,
  getSrchIndexSearchCountServiceLogsRoute,
  getSrchIndexSearchServiceLogsRoute,
  getSrchIndexStorageDiskRoute,
  getSrchWWorkspaceIndexSearchJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexSearchHandler = app
  .openapi(getSrchWWorkspaceIndexSearchJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSrchIndexSearchServiceLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSrchIndexSearchCountServiceLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSrchIndexStorageDiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexerDeleteIdxNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexerStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSrchIndexSearchCountServiceLogsRoute,
  getSrchIndexSearchServiceLogsRoute,
  getSrchIndexStorageDiskRoute,
  getSrchWWorkspaceIndexSearchJobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const srchHandler = app
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

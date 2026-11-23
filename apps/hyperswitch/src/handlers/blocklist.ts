import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlocklistRoute,
  getBlocklistBatchJobIdRoute,
  getBlocklistBatchRoute,
  getBlocklistCountRoute,
  getBlocklistLookupRoute,
  getBlocklistRoute,
  postBlocklistBatchRoute,
  postBlocklistCloneRoute,
  postBlocklistExportRoute,
  postBlocklistRoute,
  postBlocklistToggleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocklistHandler = app
  .openapi(deleteBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistBatchJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistCloneRoute, (c) => {
    throw new Error('Not implemented')
  })

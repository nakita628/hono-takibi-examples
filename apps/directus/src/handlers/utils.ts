import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUtilsRandomStringRoute,
  postUtilsCacheClearRoute,
  postUtilsExportCollectionRoute,
  postUtilsImportCollectionRoute,
  postUtilsImportRoute,
  postUtilsSortCollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const utilsHandler = app
  .openapi(postUtilsSortCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsImportCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsExportCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUtilsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUtilsRandomStringRoute, (c) => {
    throw new Error('Not implemented')
  })

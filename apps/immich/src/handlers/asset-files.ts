import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssetFilesIdRoute,
  getAssetFilesIdDownloadRoute,
  getAssetFilesIdRoute,
  getAssetFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetFilesHandler = app
  .openapi(getAssetFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetFilesIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })

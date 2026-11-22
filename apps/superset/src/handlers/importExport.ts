import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AssetsExportIndexRoute, postApiV1AssetsImportIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const importExportHandler = app
  .openapi(getApiV1AssetsExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AssetsImportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

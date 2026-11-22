import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3AssetManagementAssetsSendEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetManagementHandler = app.openapi(
  getV3AssetManagementAssetsSendEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

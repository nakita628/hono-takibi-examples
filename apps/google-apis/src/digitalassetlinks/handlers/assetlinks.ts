import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AssetlinksCheckRoute, postV1AssetlinksBulkCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const assetlinksHandler = app
  .openapi(postV1AssetlinksBulkCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetlinksCheckRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3AssetChangesChangeSetsChangeSetIdRoute,
  getV3AssetChangesChannelsRoute,
  putV3AssetChangesChangeSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetChangesHandler = app
  .openapi(putV3AssetChangesChangeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3AssetChangesChangeSetsChangeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3AssetChangesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportOrgAssetsSyncCreatedAssetsJsonRoute,
  getExportOrgAssetsSyncUpdatedAssetsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const splunkHandler = app
  .openapi(getExportOrgAssetsSyncCreatedAssetsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsSyncUpdatedAssetsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

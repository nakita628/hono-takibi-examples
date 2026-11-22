import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdCustomPagesAssetsAssetNameRoute,
  getZonesZoneIdCustomPagesAssetsAssetNameRoute,
  getZonesZoneIdCustomPagesAssetsRoute,
  postZonesZoneIdCustomPagesAssetsRoute,
  putZonesZoneIdCustomPagesAssetsAssetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customAssetsForAZoneHandler = app
  .openapi(getZonesZoneIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdCustomPagesAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdCustomPagesAssetsAssetNameRoute, (c) => {
    throw new Error('Not implemented')
  })

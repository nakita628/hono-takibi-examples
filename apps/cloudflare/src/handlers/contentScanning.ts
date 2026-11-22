import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdContentUploadScanPayloadsExpressionIdRoute,
  getZonesZoneIdContentUploadScanPayloadsRoute,
  getZonesZoneIdContentUploadScanSettingsRoute,
  patchZonesZoneIdContentUploadScanPayloadsExpressionIdRoute,
  postZonesZoneIdContentUploadScanDisableRoute,
  postZonesZoneIdContentUploadScanEnableRoute,
  postZonesZoneIdContentUploadScanPayloadsRoute,
  putZonesZoneIdContentUploadScanSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentScanningHandler = app
  .openapi(postZonesZoneIdContentUploadScanDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdContentUploadScanEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdContentUploadScanPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdContentUploadScanPayloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdContentUploadScanPayloadsExpressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdContentUploadScanPayloadsExpressionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdContentUploadScanSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdContentUploadScanSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

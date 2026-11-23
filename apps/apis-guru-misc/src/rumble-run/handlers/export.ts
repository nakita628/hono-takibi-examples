import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportOrgAssetsCiscoCsvRoute,
  getExportOrgAssetsCsvRoute,
  getExportOrgAssetsJsonlRoute,
  getExportOrgAssetsJsonRoute,
  getExportOrgAssetsNmapXmlRoute,
  getExportOrgAssetsServicenowCsvRoute,
  getExportOrgAssetsServicenowJsonRoute,
  getExportOrgAssetsSyncCreatedAssetsJsonRoute,
  getExportOrgAssetsSyncUpdatedAssetsJsonRoute,
  getExportOrgServicesCsvRoute,
  getExportOrgServicesJsonlRoute,
  getExportOrgServicesJsonRoute,
  getExportOrgServicesServicenowCsvRoute,
  getExportOrgSitesCsvRoute,
  getExportOrgSitesJsonlRoute,
  getExportOrgSitesJsonRoute,
  getExportOrgWirelessCsvRoute,
  getExportOrgWirelessJsonlRoute,
  getExportOrgWirelessJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(getExportOrgAssetsCiscoCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsNmapXmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsServicenowCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsServicenowJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsSyncCreatedAssetsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsSyncUpdatedAssetsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesServicenowCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgSitesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgSitesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgSitesJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgWirelessCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgWirelessJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgWirelessJsonlRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportOrgAssetsCsvRoute,
  getExportOrgAssetsJsonlRoute,
  getExportOrgAssetsJsonRoute,
  getExportOrgAssetsNmapXmlRoute,
  getExportOrgServicesCsvRoute,
  getExportOrgServicesJsonlRoute,
  getExportOrgServicesJsonRoute,
  getExportOrgSitesCsvRoute,
  getExportOrgSitesJsonlRoute,
  getExportOrgSitesJsonRoute,
  getExportOrgWirelessCsvRoute,
  getExportOrgWirelessJsonlRoute,
  getExportOrgWirelessJsonRoute,
  getOrgAssetsTopHwCsvRoute,
  getOrgAssetsTopOsCsvRoute,
  getOrgAssetsTopTagsCsvRoute,
  getOrgAssetsTopTypesCsvRoute,
  getOrgServicesSubnetStatsCsvRoute,
  getOrgServicesTopProductsCsvRoute,
  getOrgServicesTopProtocolsCsvRoute,
  getOrgServicesTopTcpCsvRoute,
  getOrgServicesTopUdpCsvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
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
  .openapi(getExportOrgServicesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesJsonlRoute, (c) => {
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
  .openapi(getOrgAssetsTopHwCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAssetsTopOsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAssetsTopTagsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgAssetsTopTypesCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesSubnetStatsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesTopProductsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesTopProtocolsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesTopTcpCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgServicesTopUdpCsvRoute, (c) => {
    throw new Error('Not implemented')
  })

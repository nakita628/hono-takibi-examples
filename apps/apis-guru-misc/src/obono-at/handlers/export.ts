import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportGobdRegistrierkassenRegistrierkasseUuidRoute,
  getExportHtmlBelegeBelegUuidRoute,
  getExportPdfBelegeBelegUuidRoute,
  getExportQrBelegeBelegUuidRoute,
  getExportThermalPrintBelegeBelegUuidRoute,
  getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportGobdRegistrierkassenRegistrierkasseUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportHtmlBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportPdfBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportQrBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportThermalPrintBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRoute, (c) => {
    throw new Error('Not implemented')
  })

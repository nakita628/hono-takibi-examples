import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuthRoute,
  getBelegeBelegUuidRoute,
  getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRoute,
  getExportGobdRegistrierkassenRegistrierkasseUuidRoute,
  getExportHtmlBelegeBelegUuidRoute,
  getExportPdfBelegeBelegUuidRoute,
  getExportQrBelegeBelegUuidRoute,
  getExportThermalPrintBelegeBelegUuidRoute,
  getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRoute,
  getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
  getRegistrierkassenRegistrierkasseUuidBelegeRoute,
  getRegistrierkassenRegistrierkasseUuidDepRoute,
  getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute,
  getRegistrierkassenRegistrierkasseUuidRoute,
  postRegistrierkassenRegistrierkasseUuidAbschlussRoute,
  putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
} from './routes'
import {
  getAuthRouteHandler,
  getBelegeBelegUuidRouteHandler,
  getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  getExportGobdRegistrierkassenRegistrierkasseUuidRouteHandler,
  getExportHtmlBelegeBelegUuidRouteHandler,
  getExportPdfBelegeBelegUuidRouteHandler,
  getExportQrBelegeBelegUuidRouteHandler,
  getExportThermalPrintBelegeBelegUuidRouteHandler,
  getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRouteHandler,
  getRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  getRegistrierkassenRegistrierkasseUuidDepRouteHandler,
  getRegistrierkassenRegistrierkasseUuidMonatsbelegeRouteHandler,
  getRegistrierkassenRegistrierkasseUuidRouteHandler,
  postRegistrierkassenRegistrierkasseUuidAbschlussRouteHandler,
  putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthRoute, getAuthRouteHandler)
  .openapi(getBelegeBelegUuidRoute, getBelegeBelegUuidRouteHandler)
  .openapi(
    getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRoute,
    getExportCsvRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  )
  .openapi(
    getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRoute,
    getExportDep131RegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  )
  .openapi(
    getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRoute,
    getExportDep7RegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  )
  .openapi(
    getExportGobdRegistrierkassenRegistrierkasseUuidRoute,
    getExportGobdRegistrierkassenRegistrierkasseUuidRouteHandler,
  )
  .openapi(getExportHtmlBelegeBelegUuidRoute, getExportHtmlBelegeBelegUuidRouteHandler)
  .openapi(getExportPdfBelegeBelegUuidRoute, getExportPdfBelegeBelegUuidRouteHandler)
  .openapi(getExportQrBelegeBelegUuidRoute, getExportQrBelegeBelegUuidRouteHandler)
  .openapi(
    getExportThermalPrintBelegeBelegUuidRoute,
    getExportThermalPrintBelegeBelegUuidRouteHandler,
  )
  .openapi(
    getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRoute,
    getExportXlsRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  )
  .openapi(
    getRegistrierkassenRegistrierkasseUuidRoute,
    getRegistrierkassenRegistrierkasseUuidRouteHandler,
  )
  .openapi(
    postRegistrierkassenRegistrierkasseUuidAbschlussRoute,
    postRegistrierkassenRegistrierkasseUuidAbschlussRouteHandler,
  )
  .openapi(
    getRegistrierkassenRegistrierkasseUuidBelegeRoute,
    getRegistrierkassenRegistrierkasseUuidBelegeRouteHandler,
  )
  .openapi(
    getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
    getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRouteHandler,
  )
  .openapi(
    putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
    putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRouteHandler,
  )
  .openapi(
    getRegistrierkassenRegistrierkasseUuidDepRoute,
    getRegistrierkassenRegistrierkasseUuidDepRouteHandler,
  )
  .openapi(
    getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute,
    getRegistrierkassenRegistrierkasseUuidMonatsbelegeRouteHandler,
  )

export default app

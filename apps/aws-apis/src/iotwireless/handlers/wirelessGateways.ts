import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWirelessGatewaysIdCertificateRoute,
  deleteWirelessGatewaysIdRoute,
  deleteWirelessGatewaysIdTasksRoute,
  deleteWirelessGatewaysIdThingRoute,
  getWirelessGatewaysIdCertificateRoute,
  getWirelessGatewaysIdentifierIdentifierTypeRoute,
  getWirelessGatewaysIdFirmwareInformationRoute,
  getWirelessGatewaysIdStatisticsRoute,
  getWirelessGatewaysIdTasksRoute,
  getWirelessGatewaysRoute,
  patchWirelessGatewaysIdRoute,
  postWirelessGatewaysIdTasksRoute,
  postWirelessGatewaysRoute,
  putWirelessGatewaysIdCertificateRoute,
  putWirelessGatewaysIdThingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wirelessGatewaysHandler = app
  .openapi(putWirelessGatewaysIdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessGatewaysIdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysIdCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWirelessGatewaysIdThingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessGatewaysIdThingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWirelessGatewaysIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessGatewaysIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWirelessGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWirelessGatewaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysIdentifierIdentifierTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysIdFirmwareInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWirelessGatewaysIdStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })

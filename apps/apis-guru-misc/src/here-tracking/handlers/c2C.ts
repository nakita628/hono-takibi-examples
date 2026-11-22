import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRoute,
  deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRoute,
  deleteC2cV4ConnectorsConnectorIdRoute,
  getC2cV4ConnectorsConnectorIdExtDevicesRoute,
  getC2cV4ConnectorsConnectorIdRoute,
  getC2cV4ConnectorsExtDevicesExternalDeviceIdRoute,
  getC2cV4ConnectorsRoute,
  getC2cV4DriversRoute,
  getC2cV4HealthRoute,
  getC2cV4VersionRoute,
  postC2cV4CallbackRoute,
  postC2cV4ConnectorsConnectorIdExtDevicesRoute,
  postC2cV4ConnectorsRoute,
  postC2cV4DriversDriverIdVerifyRoute,
  putC2cV4ConnectorsConnectorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const c2CHandler = app
  .openapi(postC2cV4CallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postC2cV4ConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4ConnectorsExtDevicesExternalDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteC2cV4ConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4ConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putC2cV4ConnectorsConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4ConnectorsConnectorIdExtDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postC2cV4ConnectorsConnectorIdExtDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteC2cV4ConnectorsConnectorIdExtDevicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteC2cV4ConnectorsConnectorIdExtDevicesExternalDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4DriversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postC2cV4DriversDriverIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getC2cV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })

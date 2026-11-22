import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegistryV2DevicesDeviceOrExternalIdRoute,
  deleteRegistryV2TrackingIdRoute,
  getRegistryV2AppIdDevicesRoute,
  getRegistryV2AppIdLicenseCountRoute,
  getRegistryV2DevicesDeviceOrExternalIdRoute,
  getRegistryV2HealthRoute,
  getRegistryV2JobIdResultsRoute,
  getRegistryV2JobIdStatusRoute,
  getRegistryV2LicensesRoute,
  getRegistryV2TrackingIdRoute,
  getRegistryV2VersionRoute,
  postRegistryV2AppIdDevicesRoute,
  postRegistryV2AppIdOneDeviceRoute,
  postRegistryV4ResourcesResourceTypeFindRoute,
  putRegistryV2DevicesDeviceOrExternalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registryHandler = app
  .openapi(deleteRegistryV2DevicesDeviceOrExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2DevicesDeviceOrExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRegistryV2DevicesDeviceOrExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2LicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2AppIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistryV2AppIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2AppIdLicenseCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistryV2AppIdOneDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2JobIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2JobIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegistryV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistryV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistryV4ResourcesResourceTypeFindRoute, (c) => {
    throw new Error('Not implemented')
  })

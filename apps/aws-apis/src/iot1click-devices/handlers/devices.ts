import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute,
  getDevicesDeviceIdMethodsRoute,
  getDevicesDeviceIdRoute,
  getDevicesRoute,
  postDevicesDeviceIdMethodsRoute,
  putDevicesDeviceIdFinalizeClaimRoute,
  putDevicesDeviceIdInitiateClaimRoute,
  putDevicesDeviceIdStateRoute,
  putDevicesDeviceIdUnclaimRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesDeviceIdFinalizeClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesDeviceIdInitiateClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdEventsFromTimeStampToTimeStampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesDeviceIdUnclaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDevicesDeviceIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })

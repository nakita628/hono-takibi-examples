import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBluetoothGetBondedRoute,
  getBluetoothScanResultsRoute,
  getBluetoothStatusRoute,
  postBluetoothBondRoute,
  postBluetoothConnectRoute,
  postBluetoothDiscoveryRoute,
  postBluetoothScanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bluetoothHandler = app
  .openapi(postBluetoothBondRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBluetoothConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBluetoothDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBluetoothGetBondedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBluetoothScanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBluetoothScanResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBluetoothStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

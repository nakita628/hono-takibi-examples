import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfiguredNetworksRoute,
  getScanResultsRoute,
  postConnectWifiRoute,
  postForgetWifiRoute,
  postScanWifiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wifiHandler = app
  .openapi(getConfiguredNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectWifiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForgetWifiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScanResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScanWifiRoute, (c) => {
    throw new Error('Not implemented')
  })

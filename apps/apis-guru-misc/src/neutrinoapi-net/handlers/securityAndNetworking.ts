import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailVerifyRoute,
  getHostReputationRoute,
  getIpBlocklistDownloadRoute,
  getIpBlocklistRoute,
  getIpProbeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAndNetworkingHandler = app
  .openapi(getEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHostReputationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpBlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpBlocklistDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpProbeRoute, (c) => {
    throw new Error('Not implemented')
  })

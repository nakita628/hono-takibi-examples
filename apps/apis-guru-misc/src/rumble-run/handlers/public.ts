import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReleasesAgentVersionRoute,
  getReleasesPlatformVersionRoute,
  getReleasesScannerVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getReleasesAgentVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReleasesPlatformVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReleasesScannerVersionRoute, (c) => {
    throw new Error('Not implemented')
  })

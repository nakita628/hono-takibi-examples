import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BearerGetTokenRoute,
  getApiV2BearerProtectionRoute,
  getApiV3BearerGetTokenRoute,
  getApiV3BearerProtectionRoute,
  getApiV3MeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(getApiV3BearerProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BearerGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3MeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BearerProtectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BearerGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

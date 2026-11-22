import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CallerIdentityRoute,
  getApiV2OpenapiJsonRoute,
  getApiV2PublicIpListRoute,
  getApiV2Route,
  getApiV2VersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otherHandler = app
  .openapi(getApiV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CallerIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OpenapiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PublicIpListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2VersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

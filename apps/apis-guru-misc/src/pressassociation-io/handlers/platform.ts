import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlatformPlatformIdRegionRoute,
  getPlatformPlatformIdRoute,
  getPlatformRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformHandler = app
  .openapi(getPlatformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPlatformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPlatformIdRegionRoute, (c) => {
    throw new Error('Not implemented')
  })

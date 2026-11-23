import { OpenAPIHono } from '@hono/zod-openapi'
import { getSigningPlatformsPlatformIdRoute, getSigningPlatformsRoute } from '../routes'

const app = new OpenAPIHono()

export const signingPlatformsHandler = app
  .openapi(getSigningPlatformsPlatformIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSigningPlatformsRoute, (c) => {
    throw new Error('Not implemented')
  })

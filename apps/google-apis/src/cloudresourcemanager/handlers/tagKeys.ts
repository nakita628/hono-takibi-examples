import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3TagKeysNamespacedRoute, getV3TagKeysRoute, postV3TagKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const tagKeysHandler = app
  .openapi(getV3TagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3TagKeysNamespacedRoute, (c) => {
    throw new Error('Not implemented')
  })

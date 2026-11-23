import { OpenAPIHono } from '@hono/zod-openapi'
import { getMediaAssetsIdRoute, getMediaAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaAssetsHandler = app
  .openapi(getMediaAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

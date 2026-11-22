import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiAssetsUuidRoute, getApiAssetsUuidRoute, postApiAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postApiAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAssetsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

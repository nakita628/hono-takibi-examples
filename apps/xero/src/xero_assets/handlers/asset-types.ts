import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssetTypesRoute, postAssetTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const assetTypesHandler = app
  .openapi(getAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

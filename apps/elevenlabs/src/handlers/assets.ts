import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AssetsAssetIdRoute,
  getV1AssetsAssetIdRoute,
  getV1AssetsRoute,
  postV1AssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

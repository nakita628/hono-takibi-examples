import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssetsAssetIdRoute,
  getAssetsAssetIdRoute,
  getAssetsRoute,
  optionsAssetsAssetIdRoute,
  optionsAssetsRoute,
  patchAssetsAssetIdRoute,
  postAssetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAssetsAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

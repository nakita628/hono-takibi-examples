import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssetsIdRoute,
  getAssetsRoute,
  getAssetTypesRoute,
  getSettingsRoute,
  postAssetsRoute,
  postAssetTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetHandler = app
  .openapi(getAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2AssetsRoute,
  getV2AssetsSymbolOrAssetIdRoute,
  getV2OptionsContractsRoute,
  getV2OptionsContractsSymbolOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getV2AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AssetsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OptionsContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2OptionsContractsSymbolOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })

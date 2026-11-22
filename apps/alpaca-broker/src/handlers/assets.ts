import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AssetsEntryRequirementsRoute,
  getV1AssetsFixedIncomeUsCorporatesRoute,
  getV1AssetsFixedIncomeUsTreasuriesRoute,
  getV1AssetsRoute,
  getV1AssetsSymbolOrAssetIdRoute,
  getV1OptionsContractsRoute,
  getV1OptionsContractsSymbolOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getV1AssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsSymbolOrAssetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsEntryRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsFixedIncomeUsCorporatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetsFixedIncomeUsTreasuriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OptionsContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OptionsContractsSymbolOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })

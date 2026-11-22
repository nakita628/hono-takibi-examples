import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ShoppersShopperIdRoute,
  getV1ShoppersShopperIdRoute,
  getV1ShoppersShopperIdStatusRoute,
  postV1ShoppersShopperIdRoute,
  postV1ShoppersSubaccountRoute,
  putV1ShoppersShopperIdFactorsPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ShoppersSubaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ShoppersShopperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShoppersShopperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShoppersShopperIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShoppersShopperIdFactorsPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShoppersShopperIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

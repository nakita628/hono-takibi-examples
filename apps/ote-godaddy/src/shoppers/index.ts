import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ShoppersShopperIdRoute,
  getV1ShoppersShopperIdRoute,
  getV1ShoppersShopperIdStatusRoute,
  postV1ShoppersShopperIdRoute,
  postV1ShoppersSubaccountRoute,
  putV1ShoppersShopperIdFactorsPasswordRoute,
} from './routes'
import {
  deleteV1ShoppersShopperIdRouteHandler,
  getV1ShoppersShopperIdRouteHandler,
  getV1ShoppersShopperIdStatusRouteHandler,
  postV1ShoppersShopperIdRouteHandler,
  postV1ShoppersSubaccountRouteHandler,
  putV1ShoppersShopperIdFactorsPasswordRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1ShoppersSubaccountRoute, postV1ShoppersSubaccountRouteHandler)
  .openapi(deleteV1ShoppersShopperIdRoute, deleteV1ShoppersShopperIdRouteHandler)
  .openapi(getV1ShoppersShopperIdRoute, getV1ShoppersShopperIdRouteHandler)
  .openapi(postV1ShoppersShopperIdRoute, postV1ShoppersShopperIdRouteHandler)
  .openapi(
    putV1ShoppersShopperIdFactorsPasswordRoute,
    putV1ShoppersShopperIdFactorsPasswordRouteHandler,
  )
  .openapi(getV1ShoppersShopperIdStatusRoute, getV1ShoppersShopperIdStatusRouteHandler)

export default app

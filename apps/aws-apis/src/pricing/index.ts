import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsPriceListServiceDescribeServicesHandler,
  xAmzTargetAwsPriceListServiceGetAttributeValuesHandler,
  xAmzTargetAwsPriceListServiceGetPriceListFileUrlHandler,
  xAmzTargetAwsPriceListServiceGetProductsHandler,
  xAmzTargetAwsPriceListServiceListPriceListsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsPriceListServiceDescribeServicesHandler)
  .route('/', xAmzTargetAwsPriceListServiceGetAttributeValuesHandler)
  .route('/', xAmzTargetAwsPriceListServiceGetPriceListFileUrlHandler)
  .route('/', xAmzTargetAwsPriceListServiceGetProductsHandler)
  .route('/', xAmzTargetAwsPriceListServiceListPriceListsHandler)

export default app

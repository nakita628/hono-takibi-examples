import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSPriceListServiceDescribeServicesHandler,
  XAmzTargetAWSPriceListServiceGetAttributeValuesHandler,
  XAmzTargetAWSPriceListServiceGetPriceListFileUrlHandler,
  XAmzTargetAWSPriceListServiceGetProductsHandler,
  XAmzTargetAWSPriceListServiceListPriceListsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSPriceListServiceDescribeServicesHandler)
  .route('/', XAmzTargetAWSPriceListServiceGetAttributeValuesHandler)
  .route('/', XAmzTargetAWSPriceListServiceGetPriceListFileUrlHandler)
  .route('/', XAmzTargetAWSPriceListServiceGetProductsHandler)
  .route('/', XAmzTargetAWSPriceListServiceListPriceListsHandler)

export default app

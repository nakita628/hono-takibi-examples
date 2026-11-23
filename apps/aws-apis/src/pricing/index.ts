import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetAWSPriceListServiceDescribeServicesRoute,
  postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute,
  postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRoute,
  postXAmzTargetAWSPriceListServiceGetProductsRoute,
  postXAmzTargetAWSPriceListServiceListPriceListsRoute,
} from './routes'
import {
  postXAmzTargetAWSPriceListServiceDescribeServicesRouteHandler,
  postXAmzTargetAWSPriceListServiceGetAttributeValuesRouteHandler,
  postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRouteHandler,
  postXAmzTargetAWSPriceListServiceGetProductsRouteHandler,
  postXAmzTargetAWSPriceListServiceListPriceListsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetAWSPriceListServiceDescribeServicesRoute,
    postXAmzTargetAWSPriceListServiceDescribeServicesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSPriceListServiceGetAttributeValuesRoute,
    postXAmzTargetAWSPriceListServiceGetAttributeValuesRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRoute,
    postXAmzTargetAWSPriceListServiceGetPriceListFileUrlRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSPriceListServiceGetProductsRoute,
    postXAmzTargetAWSPriceListServiceGetProductsRouteHandler,
  )
  .openapi(
    postXAmzTargetAWSPriceListServiceListPriceListsRoute,
    postXAmzTargetAWSPriceListServiceListPriceListsRouteHandler,
  )

export default app

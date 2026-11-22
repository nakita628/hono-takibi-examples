import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPriceListServiceListPriceListsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPriceListServiceListPriceListsHandler = app.openapi(
  postXAmzTargetAWSPriceListServiceListPriceListsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

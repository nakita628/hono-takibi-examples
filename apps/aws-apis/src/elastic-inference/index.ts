import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getDescribeAcceleratorTypesRoute,
  getTagsResourceArnRoute,
  postDescribeAcceleratorOfferingsRoute,
  postDescribeAcceleratorsRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getDescribeAcceleratorTypesRouteHandler,
  getTagsResourceArnRouteHandler,
  postDescribeAcceleratorOfferingsRouteHandler,
  postDescribeAcceleratorsRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDescribeAcceleratorOfferingsRoute, postDescribeAcceleratorOfferingsRouteHandler)
  .openapi(getDescribeAcceleratorTypesRoute, getDescribeAcceleratorTypesRouteHandler)
  .openapi(postDescribeAcceleratorsRoute, postDescribeAcceleratorsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

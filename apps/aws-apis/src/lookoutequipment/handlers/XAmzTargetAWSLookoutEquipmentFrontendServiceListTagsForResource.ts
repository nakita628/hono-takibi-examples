import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

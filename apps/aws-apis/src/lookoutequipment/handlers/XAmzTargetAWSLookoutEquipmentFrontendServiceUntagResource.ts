import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

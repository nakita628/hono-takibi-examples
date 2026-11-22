import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

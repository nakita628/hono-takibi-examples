import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

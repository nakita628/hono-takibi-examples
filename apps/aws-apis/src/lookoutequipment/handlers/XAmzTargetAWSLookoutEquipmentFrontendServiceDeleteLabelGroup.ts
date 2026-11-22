import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

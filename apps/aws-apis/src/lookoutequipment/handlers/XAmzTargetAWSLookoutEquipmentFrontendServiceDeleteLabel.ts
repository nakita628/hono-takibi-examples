import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

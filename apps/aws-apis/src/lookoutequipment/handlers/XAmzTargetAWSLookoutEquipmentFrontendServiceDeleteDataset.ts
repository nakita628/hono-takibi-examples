import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

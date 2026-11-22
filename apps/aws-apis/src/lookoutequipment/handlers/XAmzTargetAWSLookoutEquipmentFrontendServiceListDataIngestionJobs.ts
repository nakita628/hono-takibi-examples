import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

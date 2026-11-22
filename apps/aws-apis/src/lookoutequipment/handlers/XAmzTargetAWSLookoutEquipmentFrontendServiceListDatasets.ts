import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsHandler = app.openapi(
  postXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

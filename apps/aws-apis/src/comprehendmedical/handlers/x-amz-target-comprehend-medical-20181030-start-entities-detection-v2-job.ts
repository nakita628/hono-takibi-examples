import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartEntitiesDetectionV2JobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

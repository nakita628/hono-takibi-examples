import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListEntitiesDetectionV2JobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DescribeEntitiesDetectionV2JobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

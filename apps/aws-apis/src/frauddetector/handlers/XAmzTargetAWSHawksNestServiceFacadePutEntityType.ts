import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutEntityTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadePutEntityTypeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutEntityTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

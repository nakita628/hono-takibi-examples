import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteListRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteListHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteEventRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteEventHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

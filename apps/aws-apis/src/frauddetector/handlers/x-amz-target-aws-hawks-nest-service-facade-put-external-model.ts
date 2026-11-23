import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadePutExternalModelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadePutExternalModelHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadePutExternalModelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

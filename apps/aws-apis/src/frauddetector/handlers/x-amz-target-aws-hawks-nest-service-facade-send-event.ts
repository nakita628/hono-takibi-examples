import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeSendEventRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeSendEventHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeSendEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

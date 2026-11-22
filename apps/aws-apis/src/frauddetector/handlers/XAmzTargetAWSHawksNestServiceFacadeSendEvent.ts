import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeSendEventRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeSendEventHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeSendEventRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

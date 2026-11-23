import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616ListAttacksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616ListAttacksHandler = app.openapi(
  postXAmzTargetAWSShield20160616ListAttacksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

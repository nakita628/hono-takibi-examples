import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616EnableApplicationLayerAutomaticResponseHandler =
  app.openapi(postXAmzTargetAWSShield20160616EnableApplicationLayerAutomaticResponseRoute, (c) => {
    throw new Error('Not implemented')
  })

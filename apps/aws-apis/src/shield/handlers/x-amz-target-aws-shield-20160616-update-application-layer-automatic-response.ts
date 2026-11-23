import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsShield20160616UpdateApplicationLayerAutomaticResponseHandler =
  app.openapi(postXAmzTargetAWSShield20160616UpdateApplicationLayerAutomaticResponseRoute, (c) => {
    throw new Error('Not implemented')
  })

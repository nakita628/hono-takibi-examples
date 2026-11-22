import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseHandler =
  app.openapi(postXAmzTargetAWSShield20160616DisableApplicationLayerAutomaticResponseRoute, (c) => {
    throw new Error('Not implemented')
  })

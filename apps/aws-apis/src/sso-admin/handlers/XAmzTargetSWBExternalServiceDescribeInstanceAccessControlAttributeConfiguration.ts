import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceDescribeInstanceAccessControlAttributeConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

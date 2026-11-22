import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceCreateInstanceAccessControlAttributeConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

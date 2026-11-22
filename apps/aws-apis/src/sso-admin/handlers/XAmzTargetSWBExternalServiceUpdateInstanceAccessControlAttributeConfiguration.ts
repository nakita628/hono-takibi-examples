import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceUpdateInstanceAccessControlAttributeConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

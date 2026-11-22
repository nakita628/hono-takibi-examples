import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationHandler =
  app.openapi(
    postXAmzTargetSWBExternalServiceDeleteInstanceAccessControlAttributeConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

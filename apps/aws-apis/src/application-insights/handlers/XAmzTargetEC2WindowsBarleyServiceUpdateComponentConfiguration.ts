import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUpdateComponentConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

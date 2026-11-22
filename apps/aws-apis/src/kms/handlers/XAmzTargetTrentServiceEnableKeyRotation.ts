import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEnableKeyRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceEnableKeyRotationHandler = app.openapi(
  postXAmzTargetTrentServiceEnableKeyRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

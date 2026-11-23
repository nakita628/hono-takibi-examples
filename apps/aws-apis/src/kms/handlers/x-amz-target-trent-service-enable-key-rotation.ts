import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEnableKeyRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceEnableKeyRotationHandler = app.openapi(
  postXAmzTargetTrentServiceEnableKeyRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

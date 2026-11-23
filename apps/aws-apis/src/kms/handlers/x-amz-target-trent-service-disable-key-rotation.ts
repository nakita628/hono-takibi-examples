import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDisableKeyRotationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDisableKeyRotationHandler = app.openapi(
  postXAmzTargetTrentServiceDisableKeyRotationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEnableKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceEnableKeyHandler = app.openapi(
  postXAmzTargetTrentServiceEnableKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

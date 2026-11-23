import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEnableKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceEnableKeyHandler = app.openapi(
  postXAmzTargetTrentServiceEnableKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDisableKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceDisableKeyHandler = app.openapi(
  postXAmzTargetTrentServiceDisableKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

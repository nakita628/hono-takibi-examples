import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceCreateKeyHandler = app.openapi(
  postXAmzTargetTrentServiceCreateKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

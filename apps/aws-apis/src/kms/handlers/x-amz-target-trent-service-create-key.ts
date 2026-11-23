import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceCreateKeyHandler = app.openapi(
  postXAmzTargetTrentServiceCreateKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateRandomRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceGenerateRandomHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateRandomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

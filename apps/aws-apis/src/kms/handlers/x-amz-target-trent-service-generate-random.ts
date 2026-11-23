import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateRandomRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGenerateRandomHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateRandomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

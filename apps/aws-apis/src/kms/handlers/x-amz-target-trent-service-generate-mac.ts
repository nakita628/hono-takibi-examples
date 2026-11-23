import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateMacRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGenerateMacHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateMacRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

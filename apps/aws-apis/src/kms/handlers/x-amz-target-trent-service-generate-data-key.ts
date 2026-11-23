import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateDataKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGenerateDataKeyHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateDataKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

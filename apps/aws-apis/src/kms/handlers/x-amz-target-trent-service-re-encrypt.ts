import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceReEncryptRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceReEncryptHandler = app.openapi(
  postXAmzTargetTrentServiceReEncryptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

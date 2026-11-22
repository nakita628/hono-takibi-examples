import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEncryptRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceEncryptHandler = app.openapi(
  postXAmzTargetTrentServiceEncryptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

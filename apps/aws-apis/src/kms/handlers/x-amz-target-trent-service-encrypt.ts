import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceEncryptRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceEncryptHandler = app.openapi(
  postXAmzTargetTrentServiceEncryptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

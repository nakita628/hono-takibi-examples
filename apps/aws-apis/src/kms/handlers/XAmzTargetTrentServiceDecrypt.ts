import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDecryptRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceDecryptHandler = app.openapi(
  postXAmzTargetTrentServiceDecryptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

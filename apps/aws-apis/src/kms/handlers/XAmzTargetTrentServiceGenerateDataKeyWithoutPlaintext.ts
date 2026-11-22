import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateDataKeyWithoutPlaintextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

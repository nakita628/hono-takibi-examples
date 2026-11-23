import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateDataKeyPairWithoutPlaintextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

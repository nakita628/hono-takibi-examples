import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGenerateDataKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceGenerateDataKeyPairHandler = app.openapi(
  postXAmzTargetTrentServiceGenerateDataKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

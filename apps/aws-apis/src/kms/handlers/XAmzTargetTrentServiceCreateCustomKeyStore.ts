import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceCreateCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceCreateCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

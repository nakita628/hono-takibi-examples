import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceCreateCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceCreateCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

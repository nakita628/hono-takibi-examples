import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceConnectCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceConnectCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceConnectCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceConnectCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceConnectCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceConnectCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

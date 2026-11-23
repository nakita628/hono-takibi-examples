import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDisconnectCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDisconnectCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceDisconnectCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

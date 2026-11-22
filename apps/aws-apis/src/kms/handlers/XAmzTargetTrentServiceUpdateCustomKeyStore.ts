import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdateCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceUpdateCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceUpdateCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

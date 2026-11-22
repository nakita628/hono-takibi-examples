import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDeleteCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceDeleteCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceDeleteCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

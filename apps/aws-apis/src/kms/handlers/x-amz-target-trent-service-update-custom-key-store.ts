import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdateCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceUpdateCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceUpdateCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

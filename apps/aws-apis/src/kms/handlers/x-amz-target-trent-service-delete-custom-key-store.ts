import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDeleteCustomKeyStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDeleteCustomKeyStoreHandler = app.openapi(
  postXAmzTargetTrentServiceDeleteCustomKeyStoreRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

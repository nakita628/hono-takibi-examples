import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDisassociateDelegateFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDisassociateDelegateFromResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceDisassociateDelegateFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceAssociateDelegateToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceAssociateDelegateToResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceAssociateDelegateToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

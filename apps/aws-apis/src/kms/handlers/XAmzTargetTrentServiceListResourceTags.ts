import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListResourceTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListResourceTagsHandler = app.openapi(
  postXAmzTargetTrentServiceListResourceTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

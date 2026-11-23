import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218ListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218ListTagsHandler = app.openapi(
  postXAmzTargetOpsWorks20130218ListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

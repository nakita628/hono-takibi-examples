import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413TagResourceHandler = app.openapi(
  postXAmzTargetCodeCommit20150413TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

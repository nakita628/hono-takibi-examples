import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UntagResourceHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

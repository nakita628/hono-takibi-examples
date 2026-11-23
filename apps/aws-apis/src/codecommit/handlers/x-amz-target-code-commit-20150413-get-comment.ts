import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetCommentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetCommentHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetCommentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

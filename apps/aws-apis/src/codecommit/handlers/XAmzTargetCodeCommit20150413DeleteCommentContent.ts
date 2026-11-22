import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeleteCommentContentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413DeleteCommentContentHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeleteCommentContentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PostCommentForComparedCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413PostCommentForComparedCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PostCommentForComparedCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

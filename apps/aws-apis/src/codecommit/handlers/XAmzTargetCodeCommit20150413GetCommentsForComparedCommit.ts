import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetCommentsForComparedCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetCommentsForComparedCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetCommentsForComparedCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetMergeCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetMergeCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetMergeCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

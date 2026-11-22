import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreateUnreferencedMergeCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

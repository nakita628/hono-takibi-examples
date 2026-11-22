import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreateCommitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413CreateCommitHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreateCommitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

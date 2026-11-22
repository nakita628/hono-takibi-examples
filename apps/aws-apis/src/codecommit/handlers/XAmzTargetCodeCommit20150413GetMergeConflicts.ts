import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetMergeConflictsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetMergeConflictsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetMergeConflictsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DescribeMergeConflictsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413DescribeMergeConflictsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DescribeMergeConflictsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

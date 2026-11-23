import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413BatchDescribeMergeConflictsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413BatchDescribeMergeConflictsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

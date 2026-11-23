import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreateBranchRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413CreateBranchHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreateBranchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

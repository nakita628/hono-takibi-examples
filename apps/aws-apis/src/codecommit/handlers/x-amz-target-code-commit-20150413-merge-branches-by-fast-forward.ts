import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergeBranchesByFastForwardRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413MergeBranchesByFastForwardHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergeBranchesByFastForwardRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

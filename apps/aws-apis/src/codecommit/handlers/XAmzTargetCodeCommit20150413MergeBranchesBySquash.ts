import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergeBranchesBySquashRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413MergeBranchesBySquashHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergeBranchesBySquashRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

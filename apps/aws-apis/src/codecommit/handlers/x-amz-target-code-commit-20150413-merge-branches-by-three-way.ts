import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413MergeBranchesByThreeWayRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413MergeBranchesByThreeWayHandler = app.openapi(
  postXAmzTargetCodeCommit20150413MergeBranchesByThreeWayRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

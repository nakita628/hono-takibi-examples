import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetCommentReactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetCommentReactionsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetCommentReactionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

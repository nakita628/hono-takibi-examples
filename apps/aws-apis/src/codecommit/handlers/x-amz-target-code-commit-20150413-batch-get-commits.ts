import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413BatchGetCommitsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413BatchGetCommitsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413BatchGetCommitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeleteRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413DeleteRepositoryHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeleteRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

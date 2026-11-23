import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateRepositoryNameRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdateRepositoryNameHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateRepositoryNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

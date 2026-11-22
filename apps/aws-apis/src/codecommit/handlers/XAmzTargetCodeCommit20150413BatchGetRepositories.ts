import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413BatchGetRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413BatchGetRepositoriesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413BatchGetRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

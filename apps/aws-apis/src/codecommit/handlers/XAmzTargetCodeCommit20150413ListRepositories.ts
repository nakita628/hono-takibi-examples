import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListRepositoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413ListRepositoriesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413ListRepositoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetRepositoryHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

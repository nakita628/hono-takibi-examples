import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413CreateRepositoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413CreateRepositoryHandler = app.openapi(
  postXAmzTargetCodeCommit20150413CreateRepositoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

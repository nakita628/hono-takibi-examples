import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PutRepositoryTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413PutRepositoryTriggersHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PutRepositoryTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

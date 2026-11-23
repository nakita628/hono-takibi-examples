import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetRepositoryTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetRepositoryTriggersHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetRepositoryTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

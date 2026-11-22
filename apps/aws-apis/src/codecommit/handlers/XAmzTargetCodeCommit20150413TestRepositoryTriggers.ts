import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413TestRepositoryTriggersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413TestRepositoryTriggersHandler = app.openapi(
  postXAmzTargetCodeCommit20150413TestRepositoryTriggersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

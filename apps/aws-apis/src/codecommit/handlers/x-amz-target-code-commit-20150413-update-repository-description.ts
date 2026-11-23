import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413UpdateRepositoryDescriptionHandler = app.openapi(
  postXAmzTargetCodeCommit20150413UpdateRepositoryDescriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetBlobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetBlobHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetBlobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

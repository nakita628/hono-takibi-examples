import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetFileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetFileHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetFileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

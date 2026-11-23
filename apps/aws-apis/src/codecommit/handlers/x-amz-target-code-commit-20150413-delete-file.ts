import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413DeleteFileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413DeleteFileHandler = app.openapi(
  postXAmzTargetCodeCommit20150413DeleteFileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

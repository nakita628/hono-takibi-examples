import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413PutFileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413PutFileHandler = app.openapi(
  postXAmzTargetCodeCommit20150413PutFileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

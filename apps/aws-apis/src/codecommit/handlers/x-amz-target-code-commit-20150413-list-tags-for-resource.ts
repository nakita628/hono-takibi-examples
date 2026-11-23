import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413ListTagsForResourceHandler = app.openapi(
  postXAmzTargetCodeCommit20150413ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

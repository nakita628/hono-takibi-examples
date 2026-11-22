import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetMergeOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetMergeOptionsHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetMergeOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

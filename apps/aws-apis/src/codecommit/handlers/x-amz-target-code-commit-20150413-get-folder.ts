import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetFolderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeCommit20150413GetFolderHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetFolderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

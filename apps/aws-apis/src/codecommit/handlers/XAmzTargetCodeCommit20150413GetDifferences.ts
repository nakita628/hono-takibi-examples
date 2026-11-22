import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeCommit20150413GetDifferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeCommit20150413GetDifferencesHandler = app.openapi(
  postXAmzTargetCodeCommit20150413GetDifferencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

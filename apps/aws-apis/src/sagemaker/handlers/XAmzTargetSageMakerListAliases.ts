import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAliasesHandler = app.openapi(
  postXAmzTargetSageMakerListAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

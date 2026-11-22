import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAppsHandler = app.openapi(
  postXAmzTargetSageMakerListAppsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

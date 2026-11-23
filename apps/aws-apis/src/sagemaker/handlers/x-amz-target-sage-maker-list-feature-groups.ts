import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListFeatureGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListFeatureGroupsHandler = app.openapi(
  postXAmzTargetSageMakerListFeatureGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListLineageGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListLineageGroupsHandler = app.openapi(
  postXAmzTargetSageMakerListLineageGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

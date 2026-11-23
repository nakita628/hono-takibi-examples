import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListSpacesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListSpacesHandler = app.openapi(
  postXAmzTargetSageMakerListSpacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

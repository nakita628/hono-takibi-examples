import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListSpacesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListSpacesHandler = app.openapi(
  postXAmzTargetSageMakerListSpacesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

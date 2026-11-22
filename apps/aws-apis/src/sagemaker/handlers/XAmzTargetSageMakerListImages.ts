import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListImagesHandler = app.openapi(
  postXAmzTargetSageMakerListImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

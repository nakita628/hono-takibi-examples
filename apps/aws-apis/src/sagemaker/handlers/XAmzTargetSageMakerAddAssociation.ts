import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAddAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerAddAssociationHandler = app.openapi(
  postXAmzTargetSageMakerAddAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

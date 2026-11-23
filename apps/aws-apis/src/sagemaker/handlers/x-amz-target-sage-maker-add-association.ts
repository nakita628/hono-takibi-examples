import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAddAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerAddAssociationHandler = app.openapi(
  postXAmzTargetSageMakerAddAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

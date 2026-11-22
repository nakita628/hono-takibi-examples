import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteAssociationHandler = app.openapi(
  postXAmzTargetSageMakerDeleteAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

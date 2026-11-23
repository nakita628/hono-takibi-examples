import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteAssociationHandler = app.openapi(
  postXAmzTargetSageMakerDeleteAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

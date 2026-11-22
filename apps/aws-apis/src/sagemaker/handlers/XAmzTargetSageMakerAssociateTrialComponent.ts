import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAssociateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerAssociateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerAssociateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

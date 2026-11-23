import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerAssociateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerAssociateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerAssociateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDisassociateTrialComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDisassociateTrialComponentHandler = app.openapi(
  postXAmzTargetSageMakerDisassociateTrialComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

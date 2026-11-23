import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateDomainHandler = app.openapi(
  postXAmzTargetSageMakerUpdateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

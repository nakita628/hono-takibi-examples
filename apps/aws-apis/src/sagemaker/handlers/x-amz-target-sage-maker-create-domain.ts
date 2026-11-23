import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateDomainHandler = app.openapi(
  postXAmzTargetSageMakerCreateDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

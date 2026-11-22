import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteDomainHandler = app.openapi(
  postXAmzTargetSageMakerDeleteDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

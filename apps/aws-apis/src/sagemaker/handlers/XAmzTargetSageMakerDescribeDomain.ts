import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeDomainHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeDomainHandler = app.openapi(
  postXAmzTargetSageMakerDescribeDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

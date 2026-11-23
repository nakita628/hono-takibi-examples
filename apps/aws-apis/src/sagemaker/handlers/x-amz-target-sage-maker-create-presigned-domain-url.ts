import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreatePresignedDomainUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreatePresignedDomainUrlHandler = app.openapi(
  postXAmzTargetSageMakerCreatePresignedDomainUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

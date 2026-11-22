import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreatePresignedDomainUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreatePresignedDomainUrlHandler = app.openapi(
  postXAmzTargetSageMakerCreatePresignedDomainUrlRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

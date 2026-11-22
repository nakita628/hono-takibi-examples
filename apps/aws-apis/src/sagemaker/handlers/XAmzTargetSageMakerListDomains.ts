import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListDomainsHandler = app.openapi(
  postXAmzTargetSageMakerListDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

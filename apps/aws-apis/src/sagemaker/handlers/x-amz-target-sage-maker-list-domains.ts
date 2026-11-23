import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListDomainsHandler = app.openapi(
  postXAmzTargetSageMakerListDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeregisterMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeregisterMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeregisterMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

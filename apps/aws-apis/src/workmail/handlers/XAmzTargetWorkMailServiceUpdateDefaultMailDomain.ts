import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateDefaultMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateDefaultMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

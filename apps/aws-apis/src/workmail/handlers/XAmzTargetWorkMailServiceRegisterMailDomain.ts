import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceRegisterMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceRegisterMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceRegisterMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

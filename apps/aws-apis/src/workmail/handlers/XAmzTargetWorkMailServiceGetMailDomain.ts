import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceGetMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

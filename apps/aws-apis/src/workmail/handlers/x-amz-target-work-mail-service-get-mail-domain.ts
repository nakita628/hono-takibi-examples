import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceGetMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceUpdateDefaultMailDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceUpdateDefaultMailDomainHandler = app.openapi(
  postXAmzTargetWorkMailServiceUpdateDefaultMailDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

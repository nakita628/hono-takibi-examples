import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTransferServiceTestIdentityProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTransferServiceTestIdentityProviderHandler = app.openapi(
  postXAmzTargetTransferServiceTestIdentityProviderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

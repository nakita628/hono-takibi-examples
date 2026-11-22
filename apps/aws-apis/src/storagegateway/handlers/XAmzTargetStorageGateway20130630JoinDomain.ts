import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630JoinDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630JoinDomainHandler = app.openapi(
  postXAmzTargetStorageGateway20130630JoinDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

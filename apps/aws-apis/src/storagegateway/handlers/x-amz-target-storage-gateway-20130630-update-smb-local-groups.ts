import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630UpdateSmbLocalGroupsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSMBLocalGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630AddTagsToResourceHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AddTagsToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

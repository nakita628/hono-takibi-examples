import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630RemoveTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630RemoveTagsFromResourceHandler = app.openapi(
  postXAmzTargetStorageGateway20130630RemoveTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

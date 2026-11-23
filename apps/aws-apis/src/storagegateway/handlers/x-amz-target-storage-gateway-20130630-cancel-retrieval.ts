import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CancelRetrievalRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CancelRetrievalHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CancelRetrievalRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

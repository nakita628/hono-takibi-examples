import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeTapesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeTapesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeTapesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeTapeArchivesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeTapeArchivesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeTapeArchivesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

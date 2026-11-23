import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListVolumeInitiatorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListVolumeInitiatorsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListVolumeInitiatorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DownloadDefaultKeyPairRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DownloadDefaultKeyPairHandler = app.openapi(
  postXAmzTargetLightsail20161128DownloadDefaultKeyPairRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

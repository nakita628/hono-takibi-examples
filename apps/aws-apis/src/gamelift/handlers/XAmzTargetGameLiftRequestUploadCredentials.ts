import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftRequestUploadCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftRequestUploadCredentialsHandler = app.openapi(
  postXAmzTargetGameLiftRequestUploadCredentialsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

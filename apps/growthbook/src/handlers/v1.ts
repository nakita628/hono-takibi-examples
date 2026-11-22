import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SdkPayloadKeyRoute, postV1TransformCopyRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1SdkPayloadKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TransformCopyRoute, (c) => {
    throw new Error('Not implemented')
  })

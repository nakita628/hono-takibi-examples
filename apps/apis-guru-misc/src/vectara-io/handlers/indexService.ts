import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1DeleteDocRoute, postV1IndexRoute, postV1UploadRoute } from '../routes'

const app = new OpenAPIHono()

export const indexServiceHandler = app
  .openapi(postV1DeleteDocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1UploadRoute, (c) => {
    throw new Error('Not implemented')
  })

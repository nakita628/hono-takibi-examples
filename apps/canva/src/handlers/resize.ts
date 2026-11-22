import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ResizesJobIdRoute, postV1ResizesRoute } from '../routes'

const app = new OpenAPIHono()

export const resizeHandler = app
  .openapi(postV1ResizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResizesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })

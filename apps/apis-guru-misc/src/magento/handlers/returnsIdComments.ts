import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsIdCommentsRoute, postV1ReturnsIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsIdCommentsHandler = app
  .openapi(getV1ReturnsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ReturnsIdRoute, getV1ReturnsIdRoute, putV1ReturnsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsIdHandler = app
  .openapi(deleteV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

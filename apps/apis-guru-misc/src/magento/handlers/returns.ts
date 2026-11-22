import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReturnsRoute, postV1ReturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnsHandler = app
  .openapi(getV1ReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiReturnsIdRoute, getApiReturnsRoute, postApiReturnsRoute } from '../routes'

const app = new OpenAPIHono()

export const returnHandler = app
  .openapi(getApiReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

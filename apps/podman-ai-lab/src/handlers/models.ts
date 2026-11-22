import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPsRoute, getApiTagsRoute, postApiPullRoute, postApiShowRoute } from '../routes'

const app = new OpenAPIHono()

export const modelsHandler = app
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPsRoute, (c) => {
    throw new Error('Not implemented')
  })

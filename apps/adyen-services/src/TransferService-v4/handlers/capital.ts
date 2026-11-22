import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrantsIdRoute, getGrantsRoute, postGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const capitalHandler = app
  .openapi(getGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

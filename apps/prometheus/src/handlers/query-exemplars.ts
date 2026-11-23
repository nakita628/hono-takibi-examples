import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryExemplarsRoute, postQueryExemplarsRoute } from '../routes'

const app = new OpenAPIHono()

export const queryExemplarsHandler = app
  .openapi(getQueryExemplarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryExemplarsRoute, (c) => {
    throw new Error('Not implemented')
  })

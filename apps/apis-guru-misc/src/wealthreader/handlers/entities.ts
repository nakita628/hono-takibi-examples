import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntitiesRoute, postEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app
  .openapi(getEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })

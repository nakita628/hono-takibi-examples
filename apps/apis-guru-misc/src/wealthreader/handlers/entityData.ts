import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntitiesRoute, getErrorCodesRoute, postEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const entityDataHandler = app
  .openapi(getEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getErrorCodesRoute, (c) => {
    throw new Error('Not implemented')
  })

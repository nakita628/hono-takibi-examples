import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserPersonItemIdRoute, putUserPersonItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userPersonHandler = app
  .openapi(getUserPersonItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserPersonItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

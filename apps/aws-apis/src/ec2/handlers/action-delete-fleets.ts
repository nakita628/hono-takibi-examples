import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteFleetsRoute, postActionDeleteFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteFleetsHandler = app
  .openapi(getActionDeleteFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })

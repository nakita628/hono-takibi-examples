import { OpenAPIHono } from '@hono/zod-openapi'
import { getListsIdRoute, getListsRoute } from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

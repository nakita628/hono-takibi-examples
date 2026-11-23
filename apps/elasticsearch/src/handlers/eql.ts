import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteEqlSearchIdRoute, getEqlSearchIdRoute, getEqlSearchStatusIdRoute } from '../routes'

const app = new OpenAPIHono()

export const eqlHandler = app
  .openapi(getEqlSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEqlSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEqlSearchStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAppIdRoute, getAppIdRoute, putAppIdRoute } from '../routes'

const app = new OpenAPIHono()

export const appIdHandler = app
  .openapi(deleteAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

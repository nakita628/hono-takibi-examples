import { OpenAPIHono } from '@hono/zod-openapi'
import { getItemsRoute, getUsersUserIdItemsResumeRoute, getUsersUserIdItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdItemsResumeRoute, (c) => {
    throw new Error('Not implemented')
  })

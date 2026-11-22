import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserItemIdRoute, getUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

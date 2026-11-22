import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetUserRoute, postActionGetUserRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetUserHandler = app
  .openapi(getActionGetUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetUserRoute, (c) => {
    throw new Error('Not implemented')
  })

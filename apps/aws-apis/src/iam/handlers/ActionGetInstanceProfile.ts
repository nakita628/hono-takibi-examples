import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetInstanceProfileRoute, postActionGetInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetInstanceProfileHandler = app
  .openapi(getActionGetInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetPasswordDataRoute, postActionGetPasswordDataRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetPasswordDataHandler = app
  .openapi(getActionGetPasswordDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetPasswordDataRoute, (c) => {
    throw new Error('Not implemented')
  })

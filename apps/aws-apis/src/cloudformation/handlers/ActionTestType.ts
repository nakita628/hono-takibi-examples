import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTestTypeRoute, postActionTestTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTestTypeHandler = app
  .openapi(getActionTestTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTestTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

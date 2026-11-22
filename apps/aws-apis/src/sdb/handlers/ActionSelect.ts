import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSelectRoute, postActionSelectRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSelectHandler = app
  .openapi(getActionSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSelectRoute, (c) => {
    throw new Error('Not implemented')
  })

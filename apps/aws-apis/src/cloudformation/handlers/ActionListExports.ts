import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListExportsRoute, postActionListExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListExportsHandler = app
  .openapi(getActionListExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListExportsRoute, (c) => {
    throw new Error('Not implemented')
  })

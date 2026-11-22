import { OpenAPIHono } from '@hono/zod-openapi'
import { getMenusRoute, postMenusMenuIdDocumentsRoute } from '../routes'

const app = new OpenAPIHono()

export const menusHandler = app
  .openapi(getMenusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMenusMenuIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })

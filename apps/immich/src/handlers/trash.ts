import { OpenAPIHono } from '@hono/zod-openapi'
import { postTrashEmptyRoute, postTrashRestoreAssetsRoute, postTrashRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const trashHandler = app
  .openapi(postTrashEmptyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrashRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrashRestoreAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })

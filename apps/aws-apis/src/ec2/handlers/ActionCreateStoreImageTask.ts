import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateStoreImageTaskRoute, postActionCreateStoreImageTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateStoreImageTaskHandler = app
  .openapi(getActionCreateStoreImageTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateStoreImageTaskRoute, (c) => {
    throw new Error('Not implemented')
  })

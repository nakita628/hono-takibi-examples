import { OpenAPIHono } from '@hono/zod-openapi'
import { getObjectStoragePushAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const objectStorageHandler = app.openapi(getObjectStoragePushAccessRoute, (c) => {
  throw new Error('Not implemented')
})

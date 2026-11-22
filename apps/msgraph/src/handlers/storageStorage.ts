import { OpenAPIHono } from '@hono/zod-openapi'
import { getStorageRoute, patchStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const storageStorageHandler = app
  .openapi(getStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchStorageRoute, (c) => {
    throw new Error('Not implemented')
  })

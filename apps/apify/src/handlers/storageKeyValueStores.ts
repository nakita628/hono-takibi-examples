import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2KeyValueStoresRoute, postV2KeyValueStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const storageKeyValueStoresHandler = app
  .openapi(getV2KeyValueStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2KeyValueStoresRoute, (c) => {
    throw new Error('Not implemented')
  })

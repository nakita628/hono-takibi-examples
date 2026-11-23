import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartMetaDataListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartMetaDataListJsonHandler = app.openapi(getCartMetaDataListJsonRoute, (c) => {
  throw new Error('Not implemented')
})

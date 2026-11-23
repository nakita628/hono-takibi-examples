import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartMetaDataSetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartMetaDataSetJsonHandler = app.openapi(postCartMetaDataSetJsonRoute, (c) => {
  throw new Error('Not implemented')
})

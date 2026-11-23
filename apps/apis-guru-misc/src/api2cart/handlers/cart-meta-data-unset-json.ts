import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteCartMetaDataUnsetJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartMetaDataUnsetJsonHandler = app.openapi(deleteCartMetaDataUnsetJsonRoute, (c) => {
  throw new Error('Not implemented')
})

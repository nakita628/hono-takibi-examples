import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const importAddressHandler = app.openapi(postImportAddressRoute, (c) => {
  throw new Error('Not implemented')
})

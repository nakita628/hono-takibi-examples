import { OpenAPIHono } from '@hono/zod-openapi'
import { postExportAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const exportAddressHandler = app.openapi(postExportAddressRoute, (c) => {
  throw new Error('Not implemented')
})

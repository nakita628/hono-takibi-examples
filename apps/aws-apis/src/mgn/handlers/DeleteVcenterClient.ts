import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteVcenterClientRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteVcenterClientHandler = app.openapi(postDeleteVcenterClientRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateresourceshareRoute } from '../routes'

const app = new OpenAPIHono()

export const associateresourceshareHandler = app.openapi(postAssociateresourceshareRoute, (c) => {
  throw new Error('Not implemented')
})

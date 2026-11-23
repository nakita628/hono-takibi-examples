import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateresourceshareRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateresourceshareHandler = app.openapi(
  postDisassociateresourceshareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

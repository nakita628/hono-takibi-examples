import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateresourcesharepermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateresourcesharepermissionHandler = app.openapi(
  postDisassociateresourcesharepermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

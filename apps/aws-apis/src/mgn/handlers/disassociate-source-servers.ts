import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateSourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const disassociateSourceServersHandler = app.openapi(
  postDisassociateSourceServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

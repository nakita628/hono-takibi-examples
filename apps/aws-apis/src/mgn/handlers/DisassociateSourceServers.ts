import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisassociateSourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const DisassociateSourceServersHandler = app.openapi(
  postDisassociateSourceServersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

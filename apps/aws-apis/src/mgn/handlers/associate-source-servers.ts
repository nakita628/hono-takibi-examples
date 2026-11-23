import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateSourceServersRoute } from '../routes'

const app = new OpenAPIHono()

export const associateSourceServersHandler = app.openapi(postAssociateSourceServersRoute, (c) => {
  throw new Error('Not implemented')
})

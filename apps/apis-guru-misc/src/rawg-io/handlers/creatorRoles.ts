import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreatorRolesRoute } from '../routes'

const app = new OpenAPIHono()

export const creatorRolesHandler = app.openapi(getCreatorRolesRoute, (c) => {
  throw new Error('Not implemented')
})

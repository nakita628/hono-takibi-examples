import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateresourcesharepermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const associateresourcesharepermissionHandler = app.openapi(
  postAssociateresourcesharepermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

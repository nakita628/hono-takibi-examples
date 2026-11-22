import { OpenAPIHono } from '@hono/zod-openapi'
import { getBusinessUnitsPublic202609BusinessUnitsUserUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(
  getBusinessUnitsPublic202609BusinessUnitsUserUserIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

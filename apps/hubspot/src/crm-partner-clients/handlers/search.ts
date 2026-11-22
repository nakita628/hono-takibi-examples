import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609PartnerClientsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609PartnerClientsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

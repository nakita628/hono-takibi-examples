import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmObjects202609PartnerServicesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(postCrmObjects202609PartnerServicesSearchRoute, (c) => {
  throw new Error('Not implemented')
})

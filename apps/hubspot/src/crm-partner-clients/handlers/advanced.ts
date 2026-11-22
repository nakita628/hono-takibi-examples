import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609PartnerClientsGdprDeleteRoute,
  postCrmObjects202609PartnerClientsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609PartnerClientsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerClientsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })

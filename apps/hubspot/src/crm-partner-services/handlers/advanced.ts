import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609PartnerServicesGdprDeleteRoute,
  postCrmObjects202609PartnerServicesMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609PartnerServicesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609PartnerServicesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })

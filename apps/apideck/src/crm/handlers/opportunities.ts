import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmOpportunitiesIdRoute,
  getCrmOpportunitiesIdRoute,
  getCrmOpportunitiesRoute,
  patchCrmOpportunitiesIdRoute,
  postCrmOpportunitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const opportunitiesHandler = app
  .openapi(getCrmOpportunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmOpportunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

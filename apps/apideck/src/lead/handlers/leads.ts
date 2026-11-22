import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLeadLeadsIdRoute,
  getLeadLeadsIdRoute,
  getLeadLeadsRoute,
  patchLeadLeadsIdRoute,
  postLeadLeadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leadsHandler = app
  .openapi(getLeadLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLeadLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLeadLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLeadLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLeadLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

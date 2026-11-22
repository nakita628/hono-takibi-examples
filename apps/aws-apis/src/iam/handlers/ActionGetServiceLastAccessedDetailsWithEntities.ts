import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetServiceLastAccessedDetailsWithEntitiesRoute,
  postActionGetServiceLastAccessedDetailsWithEntitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetServiceLastAccessedDetailsWithEntitiesHandler = app
  .openapi(getActionGetServiceLastAccessedDetailsWithEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetServiceLastAccessedDetailsWithEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })

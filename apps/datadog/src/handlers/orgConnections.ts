import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2OrgConnectionsConnectionIdRoute,
  getApiV2OrgConnectionsRoute,
  patchApiV2OrgConnectionsConnectionIdRoute,
  postApiV2OrgConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgConnectionsHandler = app
  .openapi(getApiV2OrgConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2OrgConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2OrgConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2OrgConnectionsConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

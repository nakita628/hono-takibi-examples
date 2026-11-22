import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupGroupIdentifierRoute,
  getGroupGroupIdentifierRoute,
  patchGroupGroupIdentifierAssociateRoute,
  patchGroupGroupIdentifierDisassociateRoute,
  postGroupGroupIdentifierResourcesRoute,
  postGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(patchGroupGroupIdentifierAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupGroupIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupGroupIdentifierDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupGroupIdentifierResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEndpointGroupsIdEndpointsEndpointIdRoute,
  deleteEndpointGroupsIdRoute,
  getEndpointGroupsIdRoute,
  getEndpointGroupsRoute,
  postEndpointGroupsRoute,
  putEndpointGroupsIdEndpointsEndpointIdRoute,
  putEndpointGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointGroupsHandler = app
  .openapi(getEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointGroupsIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointGroupsIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })

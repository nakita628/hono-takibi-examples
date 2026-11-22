import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDataflowEndpointGroupDataflowEndpointGroupIdRoute,
  getDataflowEndpointGroupDataflowEndpointGroupIdRoute,
  getDataflowEndpointGroupRoute,
  postDataflowEndpointGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataflowEndpointGroupHandler = app
  .openapi(postDataflowEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataflowEndpointGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDataflowEndpointGroupDataflowEndpointGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataflowEndpointGroupDataflowEndpointGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })

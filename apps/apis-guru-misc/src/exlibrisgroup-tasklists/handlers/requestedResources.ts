import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlmawsV1TaskListsRequestedResourcesRoute,
  postAlmawsV1TaskListsRequestedResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestedResourcesHandler = app
  .openapi(getAlmawsV1TaskListsRequestedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsRequestedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEdgeGroupsIdRoute,
  getEdgeGroupsIdRoute,
  getEdgeGroupsRoute,
  postEdgeGroupsRoute,
  putEdgeGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const edgeGroupsHandler = app
  .openapi(getEdgeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEdgeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEdgeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEdgeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEdgeGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

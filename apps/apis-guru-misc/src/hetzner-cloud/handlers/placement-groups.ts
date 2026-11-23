import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacementGroupsIdRoute,
  getPlacementGroupsIdRoute,
  getPlacementGroupsRoute,
  postPlacementGroupsRoute,
  putPlacementGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placementGroupsHandler = app
  .openapi(getPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlacementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

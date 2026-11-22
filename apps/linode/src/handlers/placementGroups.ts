import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionPlacementGroupsGroupIdRoute,
  getApiVersionPlacementGroupsGroupIdRoute,
  getApiVersionPlacementGroupsRoute,
  postApiVersionPlacementGroupsGroupIdAssignRoute,
  postApiVersionPlacementGroupsGroupIdUnassignRoute,
  postApiVersionPlacementGroupsRoute,
  putApiVersionPlacementGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placementGroupsHandler = app
  .openapi(postApiVersionPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionPlacementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionPlacementGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionPlacementGroupsGroupIdAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionPlacementGroupsGroupIdUnassignRoute, (c) => {
    throw new Error('Not implemented')
  })

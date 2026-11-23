import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteThingGroupsThingGroupNameRoute,
  getThingGroupsRoute,
  getThingGroupsThingGroupNameRoute,
  getThingGroupsThingGroupNameThingsRoute,
  patchThingGroupsThingGroupNameRoute,
  postThingGroupsThingGroupNameRoute,
  putThingGroupsAddThingToThingGroupRoute,
  putThingGroupsRemoveThingFromThingGroupRoute,
  putThingGroupsUpdateThingGroupsForThingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const thingGroupsHandler = app
  .openapi(putThingGroupsAddThingToThingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getThingGroupsThingGroupNameThingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThingGroupsRemoveThingFromThingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putThingGroupsUpdateThingGroupsForThingRoute, (c) => {
    throw new Error('Not implemented')
  })

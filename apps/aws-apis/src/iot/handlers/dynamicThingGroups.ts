import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDynamicThingGroupsThingGroupNameRoute,
  patchDynamicThingGroupsThingGroupNameRoute,
  postDynamicThingGroupsThingGroupNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicThingGroupsHandler = app
  .openapi(postDynamicThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDynamicThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDynamicThingGroupsThingGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })

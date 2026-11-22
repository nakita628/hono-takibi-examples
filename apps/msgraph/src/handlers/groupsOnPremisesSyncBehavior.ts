import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdOnPremisesSyncBehaviorRoute,
  getGroupsGroupIdOnPremisesSyncBehaviorRoute,
  patchGroupsGroupIdOnPremisesSyncBehaviorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsOnPremisesSyncBehaviorHandler = app
  .openapi(getGroupsGroupIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOnPremisesSyncBehaviorRoute, (c) => {
    throw new Error('Not implemented')
  })

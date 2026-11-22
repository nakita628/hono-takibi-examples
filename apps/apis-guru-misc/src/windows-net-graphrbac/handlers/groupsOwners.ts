import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute,
  postTenantIDGroupsObjectIdLinksOwnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsOwnersHandler = app
  .openapi(postTenantIDGroupsObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })

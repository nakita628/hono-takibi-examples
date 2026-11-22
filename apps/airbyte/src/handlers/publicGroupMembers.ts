import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1GroupsGroupIdMembersUserIdRoute,
  getPublicV1GroupsGroupIdMembersRoute,
  postPublicV1GroupsGroupIdMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicGroupMembersHandler = app
  .openapi(getPublicV1GroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIdMembersJsonRoute,
  getGroupsByIdIdJsonRoute,
  getGroupsNameJsonRoute,
  getGroupsNameMembersJsonRoute,
  putGroupsIdJsonRoute,
  putGroupsIdMembersJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsNameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsByIdIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsNameMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

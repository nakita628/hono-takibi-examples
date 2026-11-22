import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgIDMembersUserIDRoute,
  deleteOrgsOrgIDOwnersUserIDRoute,
  deleteOrgsOrgIDRoute,
  getOrgsOrgIDMembersRoute,
  getOrgsOrgIDOwnersRoute,
  getOrgsOrgIDRoute,
  getOrgsRoute,
  patchOrgsOrgIDRoute,
  postOrgsOrgIDMembersRoute,
  postOrgsOrgIDOwnersRoute,
  postOrgsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDMembersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIDOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIDOwnersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })

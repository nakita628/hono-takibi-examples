import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMembersRoute,
  postMembersDeleteRoute,
  postMembersDisassociateRoute,
  postMembersGetRoute,
  postMembersInviteRoute,
  postMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(postMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })

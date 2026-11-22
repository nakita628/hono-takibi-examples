import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMembershipsMembershipIdRoute,
  getMembershipsMembershipIdRoute,
  getMembershipsRoute,
  getUserMembershipsMembershipIdRoute,
  putMembershipsMembershipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSAccountMembershipsHandler = app
  .openapi(getMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMembershipsMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })

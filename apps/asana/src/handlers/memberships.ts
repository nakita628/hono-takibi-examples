import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMembershipsMembershipGidRoute,
  getMembershipsMembershipGidRoute,
  getMembershipsRoute,
  postMembershipsRoute,
  putMembershipsMembershipGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membershipsHandler = app
  .openapi(getMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMembershipsMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMembershipsMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMembershipsMembershipGidRoute, (c) => {
    throw new Error('Not implemented')
  })

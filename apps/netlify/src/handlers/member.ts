import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountSlugMembersMemberIdRoute,
  getAccountSlugMembersMemberIdRoute,
  getAccountSlugMembersRoute,
  postAccountSlugMembersRoute,
  putAccountSlugMembersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberHandler = app
  .openapi(getAccountSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSlugMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountSlugMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountSlugMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountSlugMembersMemberIdRoute,
  getAccountSlugMembersMemberIdRoute,
  getAccountSlugMembersRoute,
  getAccountSlugSitesRoute,
  postAccountSlugMembersRoute,
  postAccountSlugSitesRoute,
  putAccountSlugMembersMemberIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSlugHandler = app
  .openapi(postAccountSlugSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountSlugSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCorporatePermissionsRoute,
  getCorporateRoute,
  getCorporateUserGroupsRoute,
  getCorporateUsersRoute,
  postCorporateUserGroupsRoute,
  postCorporateUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const corporateHandler = app
  .openapi(getCorporateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporatePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporateUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporateUsersRoute, (c) => {
    throw new Error('Not implemented')
  })

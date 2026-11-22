import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCorporatePermissionsRoute,
  getCorporateRoute,
  getCorporatesAllRoute,
  getCorporatesCorporateIdPermissionsRoute,
  getCorporatesCorporateIdRoute,
  getCorporatesCorporateIdUserGroupsRoute,
  getCorporatesCorporateIdUsersRoute,
  getCorporateUserGroupsRoute,
  getCorporateUsersRoute,
  postCorporatesCorporateIdUserGroupsRoute,
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
  .openapi(getCorporatesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporatesCorporateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporatesCorporateIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporatesCorporateIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCorporatesCorporateIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCorporatesCorporateIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })

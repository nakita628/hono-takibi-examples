import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCorporatesAllRoute,
  getCorporatesCorporateIdPermissionsRoute,
  getCorporatesCorporateIdRoute,
  getCorporatesCorporateIdUserGroupsRoute,
  getCorporatesCorporateIdUsersRoute,
  postCorporatesCorporateIdUserGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const corporatesHandler = app
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdUserSecurityCustomerX509Route,
  getApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCertsRoute,
  postApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const x509AuthenticationHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdDatabaseUsersUsernameCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdUserSecurityCustomerX509Route, (c) => {
    throw new Error('Not implemented')
  })

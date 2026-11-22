import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRoute,
  deleteOrganizationOrganizationIdApplicationUsersUserIdRoute,
  getOrganizationOrganizationIdApplicationUsersRoute,
  getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute,
  getOrganizationOrganizationIdApplicationUsersUserIdRoute,
  patchOrganizationOrganizationIdApplicationUsersUserIdRoute,
  postOrganizationOrganizationIdApplicationUsersRoute,
  postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationUsersHandler = app
  .openapi(postOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersUserIdAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdApplicationUsersUserIdAccessTokensTokenPrefixRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postOrganizationOrganizationIdApplicationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdApplicationUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdIdentityIdentityIdUsersUserIdRoute,
  postSitesSiteIdIdentityIdentityIdUsersLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityUserHandler = app
  .openapi(getSitesSiteIdIdentityIdentityIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdIdentityIdentityIdUsersLookupRoute, (c) => {
    throw new Error('Not implemented')
  })

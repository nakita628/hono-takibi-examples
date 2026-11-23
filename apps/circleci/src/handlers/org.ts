import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIDOidcCustomClaimsRoute,
  deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
  getOrgOrgIDOidcCustomClaimsRoute,
  getOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
  patchOrgOrgIDOidcCustomClaimsRoute,
  patchOrgOrgIDProjectProjectIDOidcCustomClaimsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgHandler = app
  .openapi(getOrgOrgIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgOrgIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIDProjectProjectIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIDProjectProjectIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgOrgIDProjectProjectIDOidcCustomClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })

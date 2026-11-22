import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefConfigAuthSigningKeysIdRoute,
  deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
  deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
  getV1ProjectsRefConfigAuthRoute,
  getV1ProjectsRefConfigAuthSigningKeysIdRoute,
  getV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
  getV1ProjectsRefConfigAuthSigningKeysRoute,
  getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
  getV1ProjectsRefConfigAuthSsoProvidersRoute,
  getV1ProjectsRefConfigAuthThirdPartyAuthRoute,
  getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute,
  patchV1ProjectsRefConfigAuthRoute,
  patchV1ProjectsRefConfigAuthSigningKeysIdRoute,
  postV1ProjectsRefConfigAuthSigningKeysLegacyRoute,
  postV1ProjectsRefConfigAuthSigningKeysRoute,
  postV1ProjectsRefConfigAuthSsoProvidersRoute,
  postV1ProjectsRefConfigAuthThirdPartyAuthRoute,
  putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postV1ProjectsRefConfigAuthSigningKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysLegacyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigAuthSigningKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthThirdPartyAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthThirdPartyAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthThirdPartyAuthTpaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigAuthSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSsoProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefConfigAuthSsoProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })

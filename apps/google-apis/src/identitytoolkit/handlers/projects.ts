import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentDefaultSupportedIdpConfigsRoute,
  getV2ParentInboundSamlConfigsRoute,
  getV2ParentOauthIdpConfigsRoute,
  getV2ParentTenantsRoute,
  patchV2NameRoute,
  postV2ParentDefaultSupportedIdpConfigsRoute,
  postV2ParentInboundSamlConfigsRoute,
  postV2ParentOauthIdpConfigsRoute,
  postV2ParentTenantsRoute,
  postV2ProjectIdentityPlatformInitializeAuthRoute,
  postV2ResourceGetIamPolicyRoute,
  postV2ResourceSetIamPolicyRoute,
  postV2ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentDefaultSupportedIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentDefaultSupportedIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentInboundSamlConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentInboundSamlConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentOauthIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentOauthIdpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentTenantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ProjectIdentityPlatformInitializeAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })

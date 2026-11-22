import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute,
  deleteV1KmsIssuersIssuerIdRoute,
  getV1KmsIssuersIssuerIdRoute,
  getV1KmsIssuersRoute,
  patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute,
  patchV1KmsIssuersIssuerIdRoute,
  postV1KmsIssuersIssuerIdKeysKeyIdActivateRoute,
  postV1KmsIssuersIssuerIdKeysKeyIdRevokeRoute,
  postV1KmsIssuersIssuerIdKeysRoute,
  postV1KmsIssuersIssuerIdPoliciesRoute,
  postV1KmsIssuersIssuerIdSignMessageRoute,
  postV1KmsIssuersIssuerIdSignTokenRoute,
  postV1KmsIssuersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kmsHandler = app
  .openapi(postV1KmsIssuersIssuerIdSignMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdSignTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KmsIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysKeyIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1KmsIssuersIssuerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1KmsIssuersIssuerIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminIdentitiesIdCredentialsTypeRoute,
  deleteAdminIdentitiesIdRoute,
  deleteAdminIdentitiesIdSessionsRoute,
  deleteAdminSessionsIdRoute,
  getAdminIdentitiesByExternalExternalIDRoute,
  getAdminIdentitiesIdRoute,
  getAdminIdentitiesIdSessionsRoute,
  getAdminIdentitiesRoute,
  getAdminSessionsIdRoute,
  getAdminSessionsRoute,
  getSchemasIdRoute,
  getSchemasRoute,
  patchAdminIdentitiesIdRoute,
  patchAdminIdentitiesRoute,
  patchAdminSessionsIdExtendRoute,
  postAdminIdentitiesRoute,
  postAdminRecoveryCodeRoute,
  postAdminRecoveryLinkRoute,
  postAdminSessionsRoute,
  postAdminTestLoginFlowsRoute,
  putAdminIdentitiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(getAdminIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIdentitiesByExternalExternalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminIdentitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminIdentitiesIdCredentialsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminIdentitiesIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIdentitiesIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecoveryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecoveryLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminSessionsIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTestLoginFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasIdRoute, (c) => {
    throw new Error('Not implemented')
  })

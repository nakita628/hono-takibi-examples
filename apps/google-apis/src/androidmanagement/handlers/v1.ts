import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1EnterprisesRoute,
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentEnrollmentTokensRoute,
  getV1ParentPoliciesRoute,
  getV1ParentWebAppsRoute,
  patchV1NameRoute,
  postV1EnterprisesRoute,
  postV1NameCancelRoute,
  postV1NameIssueCommandRoute,
  postV1ParentEnrollmentTokensRoute,
  postV1ParentWebAppsRoute,
  postV1ParentWebTokensRoute,
  postV1SignupUrlsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1EnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnterprisesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SignupUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameIssueCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEnrollmentTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEnrollmentTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentWebAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentWebTokensRoute, (c) => {
    throw new Error('Not implemented')
  })

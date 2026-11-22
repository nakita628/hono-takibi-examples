import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1OrganizationsAgenticStatusRoute,
  postV1OrganizationsCreateRoute,
  postV1OrganizationsDeleteRoute,
  postV1OrganizationsGetDataWorkerUsageRoute,
  postV1OrganizationsGetOrganizationInfoRoute,
  postV1OrganizationsGetRoute,
  postV1OrganizationsGetUsageRoute,
  postV1OrganizationsListByUserIdRoute,
  postV1OrganizationsListSummariesRoute,
  postV1OrganizationsOnboardingSendMobileHandoffEmailRoute,
  postV1OrganizationsOnboardingUpdateRoute,
  postV1OrganizationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postV1OrganizationsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOnboardingUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOnboardingSendMobileHandoffEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsAgenticStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsListByUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetDataWorkerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsListSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsGetOrganizationInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

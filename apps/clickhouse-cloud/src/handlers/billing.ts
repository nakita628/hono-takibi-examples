import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsOrganizationIdActiveBalancesRoute,
  getV1OrganizationsOrganizationIdCreditBalancesRoute,
  getV1OrganizationsOrganizationIdInferenceUsageCostRoute,
  getV1OrganizationsOrganizationIdUsageCostRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getV1OrganizationsOrganizationIdUsageCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdInferenceUsageCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdActiveBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdCreditBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })

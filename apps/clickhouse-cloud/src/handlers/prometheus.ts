import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRoute,
  getV1OrganizationsOrganizationIdPostgresPrometheusRoute,
  getV1OrganizationsOrganizationIdPrometheusDiscoveryRoute,
  getV1OrganizationsOrganizationIdPrometheusRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prometheusHandler = app
  .openapi(getV1OrganizationsOrganizationIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPrometheusDiscoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdPrometheusRoute, (c) => {
    throw new Error('Not implemented')
  })

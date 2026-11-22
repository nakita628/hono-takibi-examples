import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  deleteV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRoute,
  getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRoute,
  getV1OrganizationsOrganizationIdPostgresRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdRoute,
  patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRoute,
  postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRoute,
  postV1OrganizationsOrganizationIdPostgresRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postgresHandler = app
  .openapi(postV1OrganizationsOrganizationIdPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdCaCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdRestoredServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdReadReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdPostgresPostgresIdPrivateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdSlowQueryPatternsQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdBlockingQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdPostgresPostgresIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2StatuspagesPageIdAccessPoliciesEmailPolicyIdRoute,
  deleteApiV2StatuspagesPageIdComponentsComponentIdRoute,
  deleteApiV2StatuspagesPageIdDegradationsDegradationIdRoute,
  deleteApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateIdRoute,
  deleteApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute,
  deleteApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute,
  deleteApiV2StatuspagesPageIdRoute,
  getApiV2StatuspagesDegradationsRoute,
  getApiV2StatuspagesMaintenancesRoute,
  getApiV2StatuspagesPageIdAccessPoliciesEmailRoute,
  getApiV2StatuspagesPageIdComponentsComponentIdRoute,
  getApiV2StatuspagesPageIdComponentsRoute,
  getApiV2StatuspagesPageIdDegradationsDegradationIdRoute,
  getApiV2StatuspagesPageIdDegradationTemplatesRoute,
  getApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute,
  getApiV2StatuspagesPageIdMaintenancesMaintenanceIdRoute,
  getApiV2StatuspagesPageIdMaintenanceTemplatesRoute,
  getApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute,
  getApiV2StatuspagesPageIdRoute,
  getApiV2StatuspagesRoute,
  patchApiV2StatuspagesPageIdComponentsComponentIdRoute,
  patchApiV2StatuspagesPageIdDegradationsDegradationIdRoute,
  patchApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateIdRoute,
  patchApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute,
  patchApiV2StatuspagesPageIdMaintenancesMaintenanceIdRoute,
  patchApiV2StatuspagesPageIdMaintenancesMaintenanceIdUpdatesUpdateIdRoute,
  patchApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute,
  patchApiV2StatuspagesPageIdRoute,
  postApiV2StatuspagesPageIdAccessPoliciesEmailRoute,
  postApiV2StatuspagesPageIdComponentsRoute,
  postApiV2StatuspagesPageIdDegradationsBackfillRoute,
  postApiV2StatuspagesPageIdDegradationsRoute,
  postApiV2StatuspagesPageIdDegradationTemplatesRoute,
  postApiV2StatuspagesPageIdMaintenancesBackfillRoute,
  postApiV2StatuspagesPageIdMaintenancesRoute,
  postApiV2StatuspagesPageIdMaintenanceTemplatesRoute,
  postApiV2StatuspagesPageIdPublishRoute,
  postApiV2StatuspagesPageIdUnpublishRoute,
  postApiV2StatuspagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusPagesHandler = app
  .openapi(getApiV2StatuspagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesDegradationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesMaintenancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdAccessPoliciesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdAccessPoliciesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdAccessPoliciesEmailPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdComponentsComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdComponentsComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdComponentsComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdDegradationTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdDegradationTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdDegradationTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdDegradationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdDegradationsBackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdDegradationsDegradationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdDegradationsDegradationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdDegradationsDegradationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdDegradationsDegradationIdUpdatesUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdMaintenanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdMaintenanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdMaintenanceTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdMaintenancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdMaintenancesBackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2StatuspagesPageIdMaintenancesMaintenanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdMaintenancesMaintenanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2StatuspagesPageIdMaintenancesMaintenanceIdUpdatesUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2StatuspagesPageIdUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })

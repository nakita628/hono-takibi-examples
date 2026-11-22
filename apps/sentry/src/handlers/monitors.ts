import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRoute,
  getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
  postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRoute,
  postOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugDetectorsIndexRoute,
  putOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute,
  putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitorsHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugAvailableActionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDetectorsDetectorIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugProjectsProjectIdOrSlugDetectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugWorkflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugWorkflowsWorkflowIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

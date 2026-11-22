import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute,
  getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugTagsIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRoute,
  postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute,
  putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoverHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugDiscoverSavedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugDiscoverSavedQueryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceItemsAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceMetaTraceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugTraceTraceIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

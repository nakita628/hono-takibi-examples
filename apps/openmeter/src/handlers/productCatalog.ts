import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AddonsAddonIdRoute,
  deleteApiV1FeaturesFeatureIdRoute,
  deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  deleteApiV1PlansPlanIdRoute,
  getApiV1AddonsAddonIdRoute,
  getApiV1AddonsRoute,
  getApiV1FeaturesFeatureIdRoute,
  getApiV1FeaturesRoute,
  getApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  getApiV1PlansPlanIdAddonsRoute,
  getApiV1PlansPlanIdRoute,
  getApiV1PlansRoute,
  postApiV1AddonsAddonIdArchiveRoute,
  postApiV1AddonsAddonIdPublishRoute,
  postApiV1AddonsRoute,
  postApiV1FeaturesRoute,
  postApiV1PlansPlanIdAddonsRoute,
  postApiV1PlansPlanIdArchiveRoute,
  postApiV1PlansPlanIdOrKeyNextRoute,
  postApiV1PlansPlanIdPublishRoute,
  postApiV1PlansRoute,
  putApiV1AddonsAddonIdRoute,
  putApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  putApiV1PlansPlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productCatalogHandler = app
  .openapi(getApiV1AddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsAddonIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsAddonIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdOrKeyNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })

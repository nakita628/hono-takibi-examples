import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStatusPagesIdPostsPostIdPostmortemRoute,
  deleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute,
  deleteStatusPagesIdPostsPostIdRoute,
  deleteStatusPagesIdSubscriptionsSubscriptionIdRoute,
  getStatusPagesIdImpactsImpactIdRoute,
  getStatusPagesIdImpactsRoute,
  getStatusPagesIdPostsPostIdPostmortemRoute,
  getStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute,
  getStatusPagesIdPostsPostIdPostUpdatesRoute,
  getStatusPagesIdPostsPostIdRoute,
  getStatusPagesIdPostsRoute,
  getStatusPagesIdServicesRoute,
  getStatusPagesIdServicesServiceIdRoute,
  getStatusPagesIdSeveritiesRoute,
  getStatusPagesIdSeveritiesSeverityIdRoute,
  getStatusPagesIdStatusesRoute,
  getStatusPagesIdStatusesStatusIdRoute,
  getStatusPagesIdSubscriptionsRoute,
  getStatusPagesIdSubscriptionsSubscriptionIdRoute,
  getStatusPagesRoute,
  postStatusPagesIdPostsPostIdPostUpdatesRoute,
  postStatusPagesIdPostsRoute,
  postStatusPagesIdSubscriptionsRoute,
  putStatusPagesIdPostsPostIdPostmortemRoute,
  putStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute,
  putStatusPagesIdPostsPostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusPagesHandler = app
  .openapi(getStatusPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdImpactsImpactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdServicesServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdSeveritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdSeveritiesSeverityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdStatusesStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusPagesIdPostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStatusPagesIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusPagesIdPostsPostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdPostsPostIdPostUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusPagesIdPostsPostIdPostUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusPagesIdPostsPostIdPostUpdatesPostUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdPostsPostIdPostmortemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStatusPagesIdPostsPostIdPostmortemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusPagesIdPostsPostIdPostmortemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStatusPagesIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatusPagesIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStatusPagesIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

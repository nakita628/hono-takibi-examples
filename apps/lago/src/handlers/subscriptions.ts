import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscriptionsExternalIdAlertsCodeRoute,
  deleteSubscriptionsExternalIdAlertsRoute,
  deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  deleteSubscriptionsExternalIdRoute,
  getSubscriptionsExternalIdAlertsCodeRoute,
  getSubscriptionsExternalIdAlertsRoute,
  getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  getSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
  getSubscriptionsExternalIdChargesChargeCodeRoute,
  getSubscriptionsExternalIdChargesRoute,
  getSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
  getSubscriptionsExternalIdFixedChargesRoute,
  getSubscriptionsExternalIdLifetimeUsageRoute,
  getSubscriptionsExternalIdRoute,
  getSubscriptionsRoute,
  postSubscriptionsExternalIdAlertsRoute,
  postSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
  postSubscriptionsRoute,
  putSubscriptionsExternalIdAlertsCodeRoute,
  putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  putSubscriptionsExternalIdChargesChargeCodeRoute,
  putSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
  putSubscriptionsExternalIdLifetimeUsageRoute,
  putSubscriptionsExternalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdLifetimeUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdLifetimeUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsExternalIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsExternalIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsExternalIdAlertsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdFixedChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdChargesChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdChargesChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsExternalIdChargesChargeCodeFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdChargesChargeCodeFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })

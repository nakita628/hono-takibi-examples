import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrackingSettingsClickRoute,
  getTrackingSettingsGoogleAnalyticsRoute,
  getTrackingSettingsOpenRoute,
  getTrackingSettingsRoute,
  getTrackingSettingsSubscriptionRoute,
  patchTrackingSettingsClickRoute,
  patchTrackingSettingsGoogleAnalyticsRoute,
  patchTrackingSettingsOpenRoute,
  patchTrackingSettingsSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settings__TrackingHandler = app
  .openapi(getTrackingSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingSettingsClickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingSettingsClickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingSettingsGoogleAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingSettingsGoogleAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingSettingsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingSettingsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingSettingsSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingSettingsSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

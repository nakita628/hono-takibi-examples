import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsBalanceCurrencyRoute,
  getSettingsCheckoutFeaturesRoute,
  getSettingsCheckoutPaymentMethodsRoute,
  getSettingsCheckoutRecoveryRoute,
  getSettingsCheckoutStylesOverlayRoute,
  getSettingsCheckoutUrlRoute,
  getSettingsCurrencyConversionsRoute,
  getSettingsStatementDescriptorRoute,
  getSettingsTaxRoute,
  patchSettingsBalanceCurrencyRoute,
  patchSettingsCheckoutFeaturesRoute,
  patchSettingsCheckoutPaymentMethodsRoute,
  patchSettingsCheckoutRecoveryRoute,
  patchSettingsCheckoutStylesOverlayRoute,
  patchSettingsCheckoutUrlRoute,
  patchSettingsCurrencyConversionsRoute,
  patchSettingsStatementDescriptorRoute,
  patchSettingsTaxRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsBalanceCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsBalanceCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCheckoutFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCheckoutFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCheckoutPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCheckoutPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCheckoutRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCheckoutRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCheckoutStylesOverlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCheckoutStylesOverlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCheckoutUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCheckoutUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCurrencyConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsCurrencyConversionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsStatementDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsStatementDescriptorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsTaxRoute, (c) => {
    throw new Error('Not implemented')
  })

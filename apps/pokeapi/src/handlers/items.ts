import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CurrencyIdIndexRoute,
  getApiV2CurrencyIndexRoute,
  getApiV2ItemAttributeIdIndexRoute,
  getApiV2ItemAttributeIndexRoute,
  getApiV2ItemCategoryIdIndexRoute,
  getApiV2ItemCategoryIndexRoute,
  getApiV2ItemFlingEffectIdIndexRoute,
  getApiV2ItemFlingEffectIndexRoute,
  getApiV2ItemIdIndexRoute,
  getApiV2ItemIndexRoute,
  getApiV2ItemPocketIdIndexRoute,
  getApiV2ItemPocketIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getApiV2ItemIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemCategoryIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemAttributeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemFlingEffectIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemFlingEffectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemPocketIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ItemPocketIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrencyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CurrencyIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

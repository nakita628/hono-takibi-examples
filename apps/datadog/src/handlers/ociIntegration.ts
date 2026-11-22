import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationOciTenanciesTenancyOcidRoute,
  getApiV2IntegrationOciProductsRoute,
  getApiV2IntegrationOciTenanciesRoute,
  getApiV2IntegrationOciTenanciesTenancyOcidRoute,
  patchApiV2IntegrationOciTenanciesTenancyOcidRoute,
  postApiV2IntegrationOciTenanciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ociIntegrationHandler = app
  .openapi(getApiV2IntegrationOciProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationOciTenanciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationOciTenanciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationOciTenanciesTenancyOcidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationOciTenanciesTenancyOcidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationOciTenanciesTenancyOcidRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersIdConnectorConnectionsRoute,
  getProvidersIdConnectorLogosMainRoute,
  getProvidersIdConnectorLogosRoute,
  getProvidersIdConnectorLogosThumbnailRoute,
  getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getProvidersIdConnectorSourcesIdSourceRoute,
  getProvidersIdConnectorSourcesRoute,
  getProvidersIdProviderRoute,
  getProvidersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersIdProviderRoute, (c) => {
    throw new Error('Not implemented')
  })

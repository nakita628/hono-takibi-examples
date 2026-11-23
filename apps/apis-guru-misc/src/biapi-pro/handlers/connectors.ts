import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectorsIdConnectorLogosIdLogoRoute,
  getConnectorsIdConnectorLogosMainRoute,
  getConnectorsIdConnectorLogosRoute,
  getConnectorsIdConnectorLogosThumbnailRoute,
  getConnectorsIdConnectorRoute,
  getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getConnectorsIdConnectorSourcesIdSourceRoute,
  getConnectorsIdConnectorSourcesRoute,
  getConnectorsRoute,
  postConnectorsIdConnectorLogosRoute,
  postConnectorsRoute,
  putConnectorsIdConnectorLogosIdLogoRoute,
  putConnectorsIdConnectorLogosRoute,
  putConnectorsIdConnectorRoute,
  putConnectorsIdConnectorSourcesIdSourceRoute,
  putConnectorsIdConnectorSourcesRoute,
  putConnectorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectorsHandler = app
  .openapi(getConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectorsIdConnectorLogosIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorLogosIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectorsIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectorsIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBrowserViewsViewIdColumnsColumnNameRoute,
  deleteBrowserViewsViewIdRoute,
  getBrowserCsvRoute,
  getBrowserRoute,
  getBrowserViewsDetailsForClassNameRoute,
  getBrowserViewsDetailsForClassNameViewIdRoute,
  getBrowserViewsForClassNameRoute,
  getBrowserViewsViewIdColumnsColumnNameSettingsRoute,
  getBrowserViewsViewIdColumnsRoute,
  getBrowserViewsViewIdFilterRoute,
  getBrowserViewsViewIdOrderRoute,
  getBrowserViewsViewIdPermissionsRoute,
  getBrowserViewsViewIdRoute,
  getBrowserViewsViewIdSettingsLocalRoute,
  getBrowserViewsViewIdSettingsRoute,
  postBrowserViewsDetailsForClassNameViewIdRoute,
  postBrowserViewsForClassNameRoute,
  putBrowserViewsViewIdColumnsColumnNameSettingsRoute,
  putBrowserViewsViewIdColumnsRoute,
  putBrowserViewsViewIdFilterFilterPropertyRoute,
  putBrowserViewsViewIdFilterRoute,
  putBrowserViewsViewIdOrderRoute,
  putBrowserViewsViewIdPermissionsRoute,
  putBrowserViewsViewIdRoute,
  putBrowserViewsViewIdSettingsLocalRoute,
  putBrowserViewsViewIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const browserHandler = app
  .openapi(getBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsDetailsForClassNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsDetailsForClassNameViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrowserViewsDetailsForClassNameViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsForClassNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBrowserViewsForClassNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrowserViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBrowserViewsViewIdColumnsColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdColumnsColumnNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdColumnsColumnNameSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdFilterFilterPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowserViewsViewIdSettingsLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBrowserViewsViewIdSettingsLocalRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeExtensionsExtensionIdRoute,
  getMeExtensionsCountRoute,
  getMeExtensionsExtensionIdRoute,
  getMeExtensionsRoute,
  patchMeExtensionsExtensionIdRoute,
  postMeExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meExtensionHandler = app
  .openapi(getMeExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPluginsIdRoute,
  getPluginsMethodsRoute,
  getPluginsRoute,
  getPluginsTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app
  .openapi(getPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPluginsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

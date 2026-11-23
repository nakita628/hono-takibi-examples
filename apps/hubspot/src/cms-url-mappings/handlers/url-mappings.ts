import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUrlMappings202609UrlMappingsIdRoute,
  getUrlMappings202609UrlMappingsIdRoute,
  getUrlMappings202609UrlMappingsRoute,
  postUrlMappings202609UrlMappingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlMappingsHandler = app
  .openapi(getUrlMappings202609UrlMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUrlMappings202609UrlMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUrlMappings202609UrlMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUrlMappings202609UrlMappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

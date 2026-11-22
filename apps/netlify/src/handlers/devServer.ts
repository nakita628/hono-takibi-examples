import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdDevServersRoute,
  getSitesSiteIdDevServersDevServerIdRoute,
  getSitesSiteIdDevServersRoute,
  postSitesSiteIdDevServersDevServerIdStateRoute,
  postSitesSiteIdDevServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devServerHandler = app
  .openapi(getSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDevServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServersDevServerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServersDevServerIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })

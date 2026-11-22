import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdBuildHooksIdRoute,
  getSitesSiteIdBuildHooksIdRoute,
  getSitesSiteIdBuildHooksRoute,
  postSitesSiteIdBuildHooksRoute,
  putSitesSiteIdBuildHooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildHookHandler = app
  .openapi(getSitesSiteIdBuildHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdBuildHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdBuildHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

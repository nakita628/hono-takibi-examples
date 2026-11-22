import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdDevServerHooksIdRoute,
  getSitesSiteIdDevServerHooksIdRoute,
  getSitesSiteIdDevServerHooksRoute,
  postSitesSiteIdDevServerHooksRoute,
  putSitesSiteIdDevServerHooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devServerHookHandler = app
  .openapi(getSitesSiteIdDevServerHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDevServerHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDevServerHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

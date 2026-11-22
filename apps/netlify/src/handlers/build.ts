import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountIdBuildsStatusRoute,
  getBuildsBuildIdRoute,
  getSitesSiteIdBuildsRoute,
  postBuildsBuildIdStartRoute,
  postSitesSiteIdBuildsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildHandler = app
  .openapi(getSitesSiteIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildsBuildIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIdBuildsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdWxrulesWxrulesIdRoute,
  getApiV1SitesSiteIdWxrulesDerivedRoute,
  getApiV1SitesSiteIdWxrulesRoute,
  getApiV1SitesSiteIdWxrulesWxrulesIdRoute,
  postApiV1SitesSiteIdWxrulesRoute,
  putApiV1SitesSiteIdWxrulesWxrulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWxRulesHandler = app
  .openapi(getApiV1SitesSiteIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWxrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxrulesDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWxrulesWxrulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

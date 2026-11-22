import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdWlansWlanIdRoute,
  getApiV1SitesSiteIdWlansDerivedRoute,
  getApiV1SitesSiteIdWlansRoute,
  getApiV1SitesSiteIdWlansWlanIdRoute,
  getApiV1UtilsTestTelstraRoute,
  postApiV1SitesSiteIdWlansRoute,
  postApiV1SitesSiteIdWlansWlanIdPortalImageRoute,
  postApiV1UtilsTestTwilioRoute,
  putApiV1SitesSiteIdWlansWlanIdPortalTemplateRoute,
  putApiV1SitesSiteIdWlansWlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWlansHandler = app
  .openapi(getApiV1SitesSiteIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWlansDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWlansWlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdWlansWlanIdPortalImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdWlansWlanIdPortalTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UtilsTestTelstraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UtilsTestTwilioRoute, (c) => {
    throw new Error('Not implemented')
  })

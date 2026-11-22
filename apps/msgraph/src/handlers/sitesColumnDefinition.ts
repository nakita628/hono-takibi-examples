import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdColumnsColumnDefinitionIdSourceColumnRoute,
  getSitesSiteIdColumnsCountRoute,
  getSitesSiteIdColumnsRoute,
  getSitesSiteIdExternalColumnsColumnDefinitionIdRoute,
  getSitesSiteIdExternalColumnsCountRoute,
  getSitesSiteIdExternalColumnsRoute,
  getSitesSiteIdGetByPathPathPathColumnsRoute,
  getSitesSiteIdGetByPathPathPathExternalColumnsRoute,
  patchSitesSiteIdColumnsColumnDefinitionIdRoute,
  postSitesSiteIdColumnsRoute,
  postSitesSiteIdGetByPathPathPathColumnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesColumnDefinitionHandler = app
  .openapi(getSitesSiteIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsColumnDefinitionIdSourceColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdGetByPathPathPathColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathExternalColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })

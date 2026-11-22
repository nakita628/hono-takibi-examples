import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdColumnsColumnDefinitionIdRoute,
  getSitesSiteIdColumnsColumnDefinitionIdSourceColumnRoute,
  getSitesSiteIdColumnsRoute,
  getSitesSiteIdExternalColumnsColumnDefinitionIdRoute,
  getSitesSiteIdExternalColumnsRoute,
  patchSitesSiteIdColumnsColumnDefinitionIdRoute,
  postSitesSiteIdColumnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesColumnDefinitionHandler = app
  .openapi(getSitesSiteIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSitesSiteIdColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdColumnsColumnDefinitionIdSourceColumnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdExternalColumnsColumnDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

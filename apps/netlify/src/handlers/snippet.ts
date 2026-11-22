import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSitesSiteIdSnippetsSnippetIdRoute,
  getSitesSiteIdSnippetsRoute,
  getSitesSiteIdSnippetsSnippetIdRoute,
  postSitesSiteIdSnippetsRoute,
  putSitesSiteIdSnippetsSnippetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snippetHandler = app
  .openapi(getSitesSiteIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdSnippetsSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

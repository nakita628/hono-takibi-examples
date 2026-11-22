import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SitesSiteIdSnippetRoute,
  getV2SitesSiteIdSnippetRoute,
  postV2SitesSiteIdSnippetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snippetsHandler = app
  .openapi(deleteV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SitesSiteIdSnippetRoute, (c) => {
    throw new Error('Not implemented')
  })

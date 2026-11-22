import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSitesSiteIdFormsFormIdRoute, getSitesSiteIdFormsRoute } from '../routes'

const app = new OpenAPIHono()

export const formHandler = app
  .openapi(getSitesSiteIdFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdFormsFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })

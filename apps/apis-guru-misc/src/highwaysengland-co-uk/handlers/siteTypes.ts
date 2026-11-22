import { OpenAPIHono } from '@hono/zod-openapi'
import { getVVersionSitetypesRoute, getVVersionSitetypesSiteTypeIdSitesRoute } from '../routes'

const app = new OpenAPIHono()

export const siteTypesHandler = app
  .openapi(getVVersionSitetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitetypesSiteTypeIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesNearestOutputFormatRoute,
  getSitesNearOutputFormatRoute,
  getSitesSiteIDOutputFormatRoute,
  getSitesSiteIDSubsitesOutputFormatRoute,
  getSitesWithinOutputFormatRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app
  .openapi(getSitesNearOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesNearestOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesWithinOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIDOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIDSubsitesOutputFormatRoute, (c) => {
    throw new Error('Not implemented')
  })

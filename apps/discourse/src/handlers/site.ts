import { OpenAPIHono } from '@hono/zod-openapi'
import { getSiteBasicInfoJsonRoute, getSiteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app
  .openapi(getSiteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSiteBasicInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

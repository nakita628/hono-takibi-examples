import { OpenAPIHono } from '@hono/zod-openapi'
import { getCitationsStylesIndexRoute, getCitationsStylesStyleIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const citationsHandler = app
  .openapi(getCitationsStylesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCitationsStylesStyleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

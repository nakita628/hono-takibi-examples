import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuffixesRoute, getSuffixesSuffixRoute } from '../routes'

const app = new OpenAPIHono()

export const suffixesHandler = app
  .openapi(getSuffixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuffixesSuffixRoute, (c) => {
    throw new Error('Not implemented')
  })

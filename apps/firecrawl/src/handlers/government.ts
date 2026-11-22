import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchGovRoute, postSearchGovRoute } from '../routes'

const app = new OpenAPIHono()

export const governmentHandler = app
  .openapi(getSearchGovRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchGovRoute, (c) => {
    throw new Error('Not implemented')
  })

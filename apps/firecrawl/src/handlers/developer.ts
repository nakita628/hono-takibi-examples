import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchDeveloperRoute, postSearchDeveloperRoute } from '../routes'

const app = new OpenAPIHono()

export const developerHandler = app
  .openapi(getSearchDeveloperRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchDeveloperRoute, (c) => {
    throw new Error('Not implemented')
  })

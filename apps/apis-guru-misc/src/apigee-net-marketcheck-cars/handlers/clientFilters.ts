import { OpenAPIHono } from '@hono/zod-openapi'
import { getClientConfigureGetRoute, postClientConfigureSetRoute } from '../routes'

const app = new OpenAPIHono()

export const clientFiltersHandler = app
  .openapi(getClientConfigureGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClientConfigureSetRoute, (c) => {
    throw new Error('Not implemented')
  })

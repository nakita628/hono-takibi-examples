import { OpenAPIHono } from '@hono/zod-openapi'
import { getSignTemplatesRoute, getSignTemplatesTemplateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const signTemplatesHandler = app
  .openapi(getSignTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

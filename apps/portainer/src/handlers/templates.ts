import { OpenAPIHono } from '@hono/zod-openapi'
import { getTemplatesRoute, postTemplatesIdFileRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmImports202609ImportIdCancelRoute, postCrmImports202609Route } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmImports202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmImports202609ImportIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

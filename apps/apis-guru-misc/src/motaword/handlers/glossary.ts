import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlossaryRoute, postGlossaryRoute } from '../routes'

const app = new OpenAPIHono()

export const glossaryHandler = app
  .openapi(getGlossaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGlossaryRoute, (c) => {
    throw new Error('Not implemented')
  })

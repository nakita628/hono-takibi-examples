import { OpenAPIHono } from '@hono/zod-openapi'
import { getOntolIdentifierIndexRoute, postOntolIdentifierIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const ontolIdentifierHandler = app
  .openapi(getOntolIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOntolIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

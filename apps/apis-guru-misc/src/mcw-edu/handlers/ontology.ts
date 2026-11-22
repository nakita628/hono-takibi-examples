import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOntologyOntAccIdRoute,
  getOntologyTermAccId1AccId2Route,
  getOntologyTermAccIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ontologyHandler = app
  .openapi(getOntologyOntAccIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermAccId1AccId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOntologyTermAccIdRoute, (c) => {
    throw new Error('Not implemented')
  })

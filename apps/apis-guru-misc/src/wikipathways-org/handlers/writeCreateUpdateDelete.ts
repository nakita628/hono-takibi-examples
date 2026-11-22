import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRemoveOntologyTagRoute,
  getSaveOntologyTagRoute,
  getUpdatePathwayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const writeCreateUpdateDeleteHandler = app
  .openapi(getRemoveOntologyTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSaveOntologyTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUpdatePathwayRoute, (c) => {
    throw new Error('Not implemented')
  })

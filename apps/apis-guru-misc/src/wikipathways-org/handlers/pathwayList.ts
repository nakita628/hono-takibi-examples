import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetPathwaysByOntologyTermRoute,
  getGetPathwaysByParentOntologyTermRoute,
  getListPathwaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pathwayListHandler = app
  .openapi(getGetPathwaysByOntologyTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPathwaysByParentOntologyTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListPathwaysRoute, (c) => {
    throw new Error('Not implemented')
  })

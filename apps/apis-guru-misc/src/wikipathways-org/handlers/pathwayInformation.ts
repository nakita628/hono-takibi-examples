import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetOntologyTermsByPathwayRoute,
  getGetPathwayInfoRoute,
  getGetPathwayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pathwayInformationHandler = app
  .openapi(getGetOntologyTermsByPathwayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPathwayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetPathwayInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

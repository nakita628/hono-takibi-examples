import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSummariesCongressBillTypeRoute,
  getSummariesCongressRoute,
  getSummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const summariesHandler = app
  .openapi(getSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSummariesCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSummariesCongressBillTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

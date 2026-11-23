import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatanewbusinessFunctionsRoute, getDatanewbusinessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const datanewbusinessHandler = app
  .openapi(getDatanewbusinessFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatanewbusinessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesSiteIdFunctionsRoute, putDeploysDeployIdFunctionsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const functionHandler = app
  .openapi(getSitesSiteIdFunctionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdFunctionsNameRoute, (c) => {
    throw new Error('Not implemented')
  })

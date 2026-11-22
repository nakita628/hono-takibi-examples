import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetBrandsRoute,
  getGetInactiveModelsRoute,
  getGetModelsRoute,
  getGetRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const staticDataHandler = app
  .openapi(getGetBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetInactiveModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })

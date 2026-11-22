import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMosaikBoxconsolidationConsolidateP2pkaddressRoute,
  getMosaikBoxconsolidationIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boxConsolidationControllerHandler = app
  .openapi(getMosaikBoxconsolidationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikBoxconsolidationConsolidateP2pkaddressRoute, (c) => {
    throw new Error('Not implemented')
  })

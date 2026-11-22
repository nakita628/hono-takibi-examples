import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdProductsIdListingsRoute,
  getEcosystemsEcosystemIdProductsIdRoute,
  getEcosystemsEcosystemIdProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getEcosystemsEcosystemIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdProductsIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })

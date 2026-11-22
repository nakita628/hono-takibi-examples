import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdListingsIdRoute,
  getEcosystemsEcosystemIdListingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listingHandler = app
  .openapi(getEcosystemsEcosystemIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdListingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdCategoriesIdListingsRoute,
  getEcosystemsEcosystemIdCategoriesIdRoute,
  getEcosystemsEcosystemIdCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoryHandler = app
  .openapi(getEcosystemsEcosystemIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCategoriesIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })

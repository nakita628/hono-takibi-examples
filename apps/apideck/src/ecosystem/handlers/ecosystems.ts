import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcosystemsEcosystemIdCategoriesIdListingsRoute,
  getEcosystemsEcosystemIdCategoriesIdRoute,
  getEcosystemsEcosystemIdCategoriesRoute,
  getEcosystemsEcosystemIdCollectionsIdListingsRoute,
  getEcosystemsEcosystemIdCollectionsIdRoute,
  getEcosystemsEcosystemIdCollectionsRoute,
  getEcosystemsEcosystemIdListingsIdRoute,
  getEcosystemsEcosystemIdListingsRoute,
  getEcosystemsEcosystemIdProductsIdListingsRoute,
  getEcosystemsEcosystemIdProductsIdRoute,
  getEcosystemsEcosystemIdProductsRoute,
  getEcosystemsEcosystemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ecosystemsHandler = app
  .openapi(getEcosystemsEcosystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCategoriesIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdCollectionsIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdListingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEcosystemsEcosystemIdProductsIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })

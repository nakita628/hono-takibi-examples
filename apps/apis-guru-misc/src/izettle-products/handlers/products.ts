import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationUuidProductsProductUuidRoute,
  deleteOrganizationsOrganizationUuidProductsRoute,
  getOrganizationsOrganizationUuidProductsOptionsRoute,
  getOrganizationsOrganizationUuidProductsProductUuidRoute,
  getOrganizationsOrganizationUuidProductsRoute,
  getOrganizationsOrganizationUuidProductsV2CountRoute,
  getOrganizationsOrganizationUuidProductsV2Route,
  postOrganizationsOrganizationUuidProductsRoute,
  putOrganizationsOrganizationUuidProductsV2ProductUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(deleteOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsV2CountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationUuidProductsV2ProductUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidProductsProductUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsProductUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

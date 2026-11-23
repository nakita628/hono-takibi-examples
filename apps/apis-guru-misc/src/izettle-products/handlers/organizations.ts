import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  deleteOrganizationsOrganizationUuidProductsProductUuidRoute,
  deleteOrganizationsOrganizationUuidProductsRoute,
  getOrganizationsOrganizationUuidCategoriesV2Route,
  getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  getOrganizationsOrganizationUuidDiscountsRoute,
  getOrganizationsOrganizationUuidImagesRoute,
  getOrganizationsOrganizationUuidImportStatusImportUuidRoute,
  getOrganizationsOrganizationUuidImportStatusRoute,
  getOrganizationsOrganizationUuidLibraryRoute,
  getOrganizationsOrganizationUuidProductsOptionsRoute,
  getOrganizationsOrganizationUuidProductsProductUuidRoute,
  getOrganizationsOrganizationUuidProductsRoute,
  getOrganizationsOrganizationUuidProductsV2CountRoute,
  getOrganizationsOrganizationUuidProductsV2Route,
  patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  postOrganizationsOrganizationUuidCategoriesV2Route,
  postOrganizationsOrganizationUuidDiscountsRoute,
  postOrganizationsOrganizationUuidImportV2Route,
  postOrganizationsOrganizationUuidProductsOnlineSlugRoute,
  postOrganizationsOrganizationUuidProductsRoute,
  putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute,
  putOrganizationsOrganizationUuidProductsV2ProductUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsOrganizationUuidCategoriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidCategoriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationUuidDiscountsDiscountUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidImportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidImportStatusImportUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidImportV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidProductsOnlineSlugRoute, (c) => {
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2BrandsBrandIdLogoRoute,
  deleteApiV2BrandsBrandIdRoute,
  getApiV2BrandsBrandIdCheckHostMappingRoute,
  getApiV2BrandsBrandIdRoute,
  getApiV2BrandsCheckHostMappingRoute,
  getApiV2BrandsRoute,
  postApiV2BrandsRoute,
  putApiV2BrandsBrandIdLogoRoute,
  putApiV2BrandsBrandIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandsHandler = app
  .openapi(getApiV2BrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdCheckHostMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2BrandsBrandIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BrandsBrandIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsCheckHostMappingRoute, (c) => {
    throw new Error('Not implemented')
  })

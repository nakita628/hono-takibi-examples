import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  deleteV21AccountsAccountIdBrandsBrandIdRoute,
  deleteV21AccountsAccountIdBrandsRoute,
  getV21AccountsAccountIdBrandsBrandIdFileRoute,
  getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute,
  getV21AccountsAccountIdBrandsBrandIdResourcesRoute,
  getV21AccountsAccountIdBrandsBrandIdRoute,
  getV21AccountsAccountIdBrandsRoute,
  postV21AccountsAccountIdBrandsRoute,
  putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute,
  putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute,
  putV21AccountsAccountIdBrandsBrandIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountBrandsHandler = app
  .openapi(deleteV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdLogosLogoTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBrandsBrandIdResourcesResourceContentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

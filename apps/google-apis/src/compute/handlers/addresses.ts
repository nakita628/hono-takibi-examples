import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionAddressesAddressRoute,
  getProjectsProjectAggregatedAddressesRoute,
  getProjectsProjectRegionsRegionAddressesAddressRoute,
  getProjectsProjectRegionsRegionAddressesRoute,
  postProjectsProjectRegionsRegionAddressesAddressMoveRoute,
  postProjectsProjectRegionsRegionAddressesResourceSetLabelsRoute,
  postProjectsProjectRegionsRegionAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getProjectsProjectAggregatedAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionAddressesAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionAddressesAddressMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionAddressesResourceSetLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })

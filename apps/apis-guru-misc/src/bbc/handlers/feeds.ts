import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAvailabilitiesRoute,
  getBroadcastsRoute,
  getGroupsRoute,
  getImagesRoute,
  getItemsRoute,
  getMasterBrandsRoute,
  getPeopleRoute,
  getPipsRoute,
  getProgrammeDetailsRoute,
  getProgrammesRoute,
  getPromotionsRoute,
  getSchedulesRoute,
  getServicesRoute,
  getVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const feedsHandler = app
  .openapi(getAvailabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterBrandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProgrammeDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProgrammesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

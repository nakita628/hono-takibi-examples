import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOndemandPagesOndemandIdRegionsCountryRoute,
  deleteOndemandPagesOndemandIdRegionsRoute,
  getOndemandPagesOndemandIdRegionsCountryRoute,
  getOndemandPagesOndemandIdRegionsRoute,
  getOndemandRegionsCountryRoute,
  getOndemandRegionsRoute,
  putOndemandPagesOndemandIdRegionsCountryRoute,
  putOndemandPagesOndemandIdRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const onDemandRegionsHandler = app
  .openapi(deleteOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOndemandPagesOndemandIdRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOndemandRegionsCountryRoute, (c) => {
    throw new Error('Not implemented')
  })

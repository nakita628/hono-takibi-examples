import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBusinessItemIdRoute,
  getApiGovernmentOrganisationRoute,
  getApiSeriesMembershipRoute,
  getApiTreatyIdBusinessItemsRoute,
  getApiTreatyIdRoute,
  getApiTreatyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiBusinessItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGovernmentOrganisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSeriesMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTreatyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTreatyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTreatyIdBusinessItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

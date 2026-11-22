import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1RestrictionsAccountRoute,
  getGwApiV1RestrictionsIdsRoute,
  getGwApiV1RestrictionsListRoute,
  getGwApiV1RestrictionsListsIdsRoute,
  getGwApiV1RestrictionsRestrictionRoute,
  getGwApiV1RestrictionsRestrictionScopeRoute,
  getGwApiV1RestrictionsUserRoute,
  postGwApiV1RestrictionsRoute,
  postGwApiV1RestrictionsVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preTradeComplianceRestrictionsHandler = app
  .openapi(postGwApiV1RestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGwApiV1RestrictionsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsListsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsRestrictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsRestrictionScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RestrictionsUserRoute, (c) => {
    throw new Error('Not implemented')
  })

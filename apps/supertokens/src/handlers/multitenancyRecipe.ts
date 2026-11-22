import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAppidAppIdRecipeMultitenancyTenantListRoute,
  getAppidAppIdRecipeMultitenancyTenantListV2Route,
  getAppidAppIdTenantIdRecipeMultitenancyTenantRoute,
  getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route,
  getRecipeMultitenancyAppListRoute,
  getRecipeMultitenancyAppListV2Route,
  getRecipeMultitenancyConnectionuridomainListRoute,
  getRecipeMultitenancyConnectionuridomainListV2Route,
  postAppidAppIdRecipeMultitenancyTenantRemoveRoute,
  postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute,
  postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute,
  postRecipeMultitenancyAppRemoveRoute,
  postRecipeMultitenancyConnectionuridomainRemoveRoute,
  putAppidAppIdRecipeMultitenancyTenantRoute,
  putAppidAppIdRecipeMultitenancyTenantV2Route,
  putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute,
  putRecipeMultitenancyAppRoute,
  putRecipeMultitenancyAppV2Route,
  putRecipeMultitenancyConnectionuridomainRoute,
  putRecipeMultitenancyConnectionuridomainV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const multitenancyRecipeHandler = app
  .openapi(putRecipeMultitenancyConnectionuridomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyConnectionuridomainV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeMultitenancyConnectionuridomainRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyConnectionuridomainListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyConnectionuridomainListV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecipeMultitenancyAppV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecipeMultitenancyAppRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyAppListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecipeMultitenancyAppListV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeMultitenancyTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdRecipeMultitenancyTenantV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeMultitenancyTenantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdTenantIdRecipeMultitenancyTenantV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdRecipeMultitenancyTenantRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeMultitenancyTenantListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppidAppIdRecipeMultitenancyTenantListV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyTenantUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })

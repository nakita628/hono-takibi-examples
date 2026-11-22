import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionOrganizationActivityListHtmlRoute,
  getActionOrganizationActivityListRoute,
  getActionOrganizationAutocompleteRoute,
  getActionOrganizationFollowerCountRoute,
  getActionOrganizationFollowerListRoute,
  getActionOrganizationListForUserRoute,
  getActionOrganizationListRoute,
  getActionOrganizationRevisionListRoute,
  getActionOrganizationShowRoute,
  getActionPackageActivityListHtmlRoute,
  getActionPackageActivityListRoute,
  getActionPackageAutocompleteRoute,
  getActionPackageListRoute,
  getActionPackageRelationshipsListRoute,
  getActionPackageRevisionListRoute,
  getActionPackageSearchRoute,
  getActionPackageShowRoute,
  getActionRelatedListRoute,
  getActionResourceSearchRoute,
  getActionResourceShowRoute,
  getActionStatusShowRoute,
  getActionTagListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionHandler = app
  .openapi(getActionOrganizationActivityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationActivityListHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationFollowerCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationFollowerListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationListForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationRevisionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionOrganizationShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageActivityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageActivityListHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageRelationshipsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageRevisionListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionPackageShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionRelatedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionResourceSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionResourceShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionStatusShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionTagListRoute, (c) => {
    throw new Error('Not implemented')
  })

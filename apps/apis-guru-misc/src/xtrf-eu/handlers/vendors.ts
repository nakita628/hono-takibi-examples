import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersPersonsPersonIdRoute,
  deleteProvidersPriceListsPriceListIdRoute,
  deleteProvidersProviderIdRoute,
  getProvidersIdsRoute,
  getProvidersPersonsIdsRoute,
  getProvidersPersonsPersonIdContactRoute,
  getProvidersPersonsPersonIdCustomFieldsRoute,
  getProvidersPersonsPersonIdRoute,
  getProvidersProviderIdAddressRoute,
  getProvidersProviderIdCompetenciesRoute,
  getProvidersProviderIdContactRoute,
  getProvidersProviderIdCorrespondenceAddressRoute,
  getProvidersProviderIdCustomFieldsRoute,
  getProvidersProviderIdRoute,
  postProvidersPersonsPersonIdNotificationInvitationRoute,
  postProvidersProviderIdNotificationInvitationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vendorsHandler = app
  .openapi(getProvidersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersPersonsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersPersonsPersonIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersPersonsPersonIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersPersonsPersonIdNotificationInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersPriceListsPriceListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdCompetenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdCorrespondenceAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersProviderIdNotificationInvitationRoute, (c) => {
    throw new Error('Not implemented')
  })

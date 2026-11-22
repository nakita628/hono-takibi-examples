import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersCustomerIdRoute,
  deleteCustomersPersonsPersonIdRoute,
  deleteCustomersPriceListsPriceListIdRoute,
  getCustomersCustomerIdAddressRoute,
  getCustomersCustomerIdCategoriesRoute,
  getCustomersCustomerIdContactRoute,
  getCustomersCustomerIdCorrespondenceAddressRoute,
  getCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
  getCustomersCustomerIdCustomFieldsRoute,
  getCustomersCustomerIdIndustriesRoute,
  getCustomersCustomerIdRoute,
  getCustomersIdsRoute,
  getCustomersPersonsIdsRoute,
  getCustomersPersonsPersonIdContactRoute,
  getCustomersPersonsPersonIdCustomFieldsRoute,
  getCustomersPersonsPersonIdRoute,
  getCustomersRoute,
  postCustomersPersonsAccessTokenRoute,
  postCustomersPersonsRoute,
  postCustomersRoute,
  putCustomersCustomerIdAddressRoute,
  putCustomersCustomerIdCategoriesRoute,
  putCustomersCustomerIdContactRoute,
  putCustomersCustomerIdCorrespondenceAddressRoute,
  putCustomersCustomerIdCustomFieldsCustomFieldKeyRoute,
  putCustomersCustomerIdCustomFieldsRoute,
  putCustomersCustomerIdIndustriesRoute,
  putCustomersCustomerIdRoute,
  putCustomersPersonsPersonIdContactRoute,
  putCustomersPersonsPersonIdCustomFieldsRoute,
  putCustomersPersonsPersonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersPersonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomersPersonsAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersPersonsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersPersonsPersonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersPersonsPersonIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersPersonsPersonIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersPersonsPersonIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersPersonsPersonIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersPriceListsPriceListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCorrespondenceAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdCorrespondenceAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdCustomFieldsCustomFieldKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdCustomFieldsCustomFieldKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomersCustomerIdIndustriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCustomersCustomerIdIndustriesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddressesIdRoute,
  getAddressesIdRoute,
  getAddressesRoute,
  postAddressesActionsValidateRoute,
  postAddressesIdActionsAcceptSuggestionsRoute,
  postAddressesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesActionsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddressesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddressesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesIdActionsAcceptSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })

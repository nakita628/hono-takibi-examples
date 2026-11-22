import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePortingOrdersIdRoute,
  getPortingOrdersExceptionTypesRoute,
  getPortingOrdersIdActivationJobsActivationJobIdRoute,
  getPortingOrdersIdActivationJobsRoute,
  getPortingOrdersIdCommentsRoute,
  getPortingOrdersIdLoaTemplateRoute,
  getPortingOrdersIdRoute,
  getPortingOrdersRoute,
  getPortingPhoneNumbersRoute,
  patchPortingOrdersIdRoute,
  postPortingOrdersIdActionsActivateRoute,
  postPortingOrdersIdActionsCancelRoute,
  postPortingOrdersIdActionsConfirmRoute,
  postPortingOrdersIdCommentsRoute,
  postPortingOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portingOrderHandler = app
  .openapi(getPortingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersExceptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPortingOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdActionsConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdActivationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdActivationJobsActivationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortingOrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingOrdersIdLoaTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortingPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })

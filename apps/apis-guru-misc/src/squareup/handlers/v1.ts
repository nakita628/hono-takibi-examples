import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1LocationIdOrdersOrderIdRoute,
  getV1LocationIdOrdersRoute,
  getV1LocationIdPaymentsPaymentIdRoute,
  getV1LocationIdPaymentsRoute,
  getV1LocationIdRefundsRoute,
  getV1LocationIdSettlementsRoute,
  getV1LocationIdSettlementsSettlementIdRoute,
  getV1MeEmployeesEmployeeIdRoute,
  getV1MeEmployeesRoute,
  getV1MeRolesRoleIdRoute,
  getV1MeRolesRoute,
  postV1LocationIdRefundsRoute,
  postV1MeEmployeesRoute,
  postV1MeRolesRoute,
  putV1LocationIdOrdersOrderIdRoute,
  putV1MeEmployeesEmployeeIdRoute,
  putV1MeRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1MeEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MeEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MeEmployeesEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MeRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MeRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LocationIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })

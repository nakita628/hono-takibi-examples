import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdPaymentsIdRoute,
  deleteAppsAppIdReconcileRoute,
  deleteAppsAppIdSepamandatesIdRoute,
  getAppsAppIdPaymentsIdRoute,
  getAppsAppIdPaymentsRecipeBookRoute,
  getAppsAppIdPaymentsRoute,
  getAppsAppIdSepamandatesCredittransferRoute,
  getAppsAppIdSepamandatesDirectdebitRoute,
  getAppsAppIdSepamandatesIdRoute,
  getAppsAppIdSepamandatesIndexRoute,
  getAppsAppIdUrssafPaymentRoute,
  getAppsAppIdUrssafPreviewRoute,
  postAppsAppIdReconcileBatchRoute,
  postAppsAppIdReconcileRoute,
  postAppsAppIdSepamandatesCredittransferRoute,
  postAppsAppIdSepamandatesDirectdebitRoute,
  postAppsAppIdSepamandatesIdRoute,
  postAppsAppIdSepamandatesIndexRoute,
  postAppsAppIdUrssafAuthRoute,
  postAppsAppIdUrssafPaymentRoute,
  postAppsAppIdUrssafRegisterCustomerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getAppsAppIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPaymentsRecipeBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdReconcileBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesCredittransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesCredittransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesDirectdebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesDirectdebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSepamandatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdUrssafPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdUrssafPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdUrssafRegisterCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })

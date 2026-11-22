import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1MattersMatterIdExportsExportIdRoute,
  deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRoute,
  deleteV1MattersMatterIdHoldsHoldIdRoute,
  deleteV1MattersMatterIdRoute,
  deleteV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
  getV1MattersMatterIdExportsExportIdRoute,
  getV1MattersMatterIdExportsRoute,
  getV1MattersMatterIdHoldsHoldIdAccountsRoute,
  getV1MattersMatterIdHoldsHoldIdRoute,
  getV1MattersMatterIdHoldsRoute,
  getV1MattersMatterIdRoute,
  getV1MattersMatterIdSavedQueriesRoute,
  getV1MattersMatterIdSavedQueriesSavedQueryIdRoute,
  getV1MattersRoute,
  postV1MattersMatterIdAddPermissionsRoute,
  postV1MattersMatterIdCloseRoute,
  postV1MattersMatterIdCountRoute,
  postV1MattersMatterIdExportsRoute,
  postV1MattersMatterIdHoldsHoldIdAccountsRoute,
  postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRoute,
  postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRoute,
  postV1MattersMatterIdHoldsRoute,
  postV1MattersMatterIdRemovePermissionsRoute,
  postV1MattersMatterIdReopenRoute,
  postV1MattersMatterIdSavedQueriesRoute,
  postV1MattersMatterIdUndeleteRoute,
  postV1MattersRoute,
  putV1MattersMatterIdHoldsHoldIdRoute,
  putV1MattersMatterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mattersHandler = app
  .openapi(getV1MattersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MattersMatterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MattersMatterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MattersMatterIdExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MattersMatterIdHoldsHoldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdHoldsHoldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1MattersMatterIdHoldsHoldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdHoldsHoldIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdHoldsHoldIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MattersMatterIdHoldsHoldIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdHoldsHoldIdAddHeldAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdHoldsHoldIdRemoveHeldAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdSavedQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1MattersMatterIdSavedQueriesSavedQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MattersMatterIdSavedQueriesSavedQueryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdAddPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdRemovePermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdReopenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MattersMatterIdUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })

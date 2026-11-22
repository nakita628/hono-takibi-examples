import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCloseAccountHolderRoute,
  postCloseStoresRoute,
  postCreateAccountHolderRoute,
  postGetAccountHolderRoute,
  postGetTaxFormRoute,
  postSuspendAccountHolderRoute,
  postUnSuspendAccountHolderRoute,
  postUpdateAccountHolderRoute,
  postUpdateAccountHolderStateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHoldersHandler = app
  .openapi(postCloseAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCloseStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTaxFormRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuspendAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUnSuspendAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpdateAccountHolderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpdateAccountHolderStateRoute, (c) => {
    throw new Error('Not implemented')
  })

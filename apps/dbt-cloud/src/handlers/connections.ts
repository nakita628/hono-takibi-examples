import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdConnectionsIdIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  getApiV3AccountsAccountIdConnectionsIdIndexRoute,
  getApiV3AccountsAccountIdConnectionsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute,
  patchApiV3AccountsAccountIdConnectionsIdIndexRoute,
  postApiV3AccountsAccountIdConnectionsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectionsHandler = app
  .openapi(getApiV3AccountsAccountIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

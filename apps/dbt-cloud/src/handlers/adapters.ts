import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adaptersHandler = app
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

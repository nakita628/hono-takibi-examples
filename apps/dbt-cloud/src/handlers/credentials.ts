import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

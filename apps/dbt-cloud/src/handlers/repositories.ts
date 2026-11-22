import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

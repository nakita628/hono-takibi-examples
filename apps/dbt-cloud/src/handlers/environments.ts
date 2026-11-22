import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(deleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsIdIndexRoute,
  getApiV3AccountsAccountIdProjectsIndexRoute,
  postApiV3AccountsAccountIdProjectsIdIndexRoute,
  postApiV3AccountsAccountIdProjectsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiV3AccountsAccountIdProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

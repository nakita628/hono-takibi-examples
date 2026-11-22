import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

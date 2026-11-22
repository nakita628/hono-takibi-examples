import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extendedAttributesHandler = app
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

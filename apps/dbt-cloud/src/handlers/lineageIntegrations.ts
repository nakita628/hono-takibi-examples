import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute,
  patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRoute,
  postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lineageIntegrationsHandler = app
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsRoute, (c) => {
    throw new Error('Not implemented')
  })

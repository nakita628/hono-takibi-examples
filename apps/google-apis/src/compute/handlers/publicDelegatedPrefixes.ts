import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  getProjectsProjectAggregatedPublicDelegatedPrefixesRoute,
  getProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  getProjectsProjectRegionsRegionPublicDelegatedPrefixesRoute,
  patchProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixAnnounceRoute,
  postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixWithdrawRoute,
  postProjectsProjectRegionsRegionPublicDelegatedPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicDelegatedPrefixesHandler = app
  .openapi(getProjectsProjectAggregatedPublicDelegatedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionPublicDelegatedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionPublicDelegatedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixAnnounceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectRegionsRegionPublicDelegatedPrefixesPublicDelegatedPrefixWithdrawRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

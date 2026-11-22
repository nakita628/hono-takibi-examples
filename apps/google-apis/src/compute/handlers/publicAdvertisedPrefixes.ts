import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute,
  getProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute,
  getProjectsProjectGlobalPublicAdvertisedPrefixesRoute,
  patchProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute,
  postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixAnnounceRoute,
  postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixWithdrawRoute,
  postProjectsProjectGlobalPublicAdvertisedPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicAdvertisedPrefixesHandler = app
  .openapi(getProjectsProjectGlobalPublicAdvertisedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalPublicAdvertisedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixAnnounceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsProjectGlobalPublicAdvertisedPrefixesPublicAdvertisedPrefixWithdrawRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  getProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  getProjectsProjectGlobalPublicDelegatedPrefixesRoute,
  patchProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute,
  postProjectsProjectGlobalPublicDelegatedPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalPublicDelegatedPrefixesHandler = app
  .openapi(getProjectsProjectGlobalPublicDelegatedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGlobalPublicDelegatedPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectGlobalPublicDelegatedPrefixesPublicDelegatedPrefixRoute, (c) => {
    throw new Error('Not implemented')
  })

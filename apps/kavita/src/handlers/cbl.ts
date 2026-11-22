import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCblRemapRulesIdRoute,
  getApiCblBrowseRoute,
  getApiCblRemapRulesAllRoute,
  getApiCblRemapRulesRoute,
  postApiCblFileImportRoute,
  postApiCblFinalizeImportRoute,
  postApiCblRemapRulesIdDemoteRoute,
  postApiCblRemapRulesIdPromoteRoute,
  postApiCblRemapRulesIdRoute,
  postApiCblRemapRulesRoute,
  postApiCblRepoImportRoute,
  postApiCblReValidateRoute,
  postApiCblSyncRoute,
  postApiCblUploadCblFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cblHandler = app
  .openapi(postApiCblSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblFileImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblUploadCblFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblReValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblFinalizeImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblRemapRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblRemapRulesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCblRemapRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCblRemapRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCblBrowseRoute, (c) => {
    throw new Error('Not implemented')
  })

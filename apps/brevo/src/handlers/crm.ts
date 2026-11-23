import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmAttributesIdRoute,
  deleteCrmDealsIdRoute,
  deleteCrmFilesIdRoute,
  deleteCrmNotesIdRoute,
  deleteCrmTasksIdRoute,
  getCrmAttributesCompaniesRoute,
  getCrmAttributesDealsRoute,
  getCrmDealsIdRoute,
  getCrmDealsRoute,
  getCrmFilesIdDataRoute,
  getCrmFilesIdRoute,
  getCrmFilesRoute,
  getCrmNotesIdRoute,
  getCrmNotesRoute,
  getCrmPipelineDetailsAllRoute,
  getCrmPipelineDetailsPipelineIDRoute,
  getCrmPipelineDetailsRoute,
  getCrmTasksIdRoute,
  getCrmTasksRoute,
  getCrmTasktypesRoute,
  patchCrmAttributesIdRoute,
  patchCrmDealsIdRoute,
  patchCrmDealsLinkUnlinkIdRoute,
  patchCrmNotesIdRoute,
  patchCrmTasksIdRoute,
  postCrmAttributesRoute,
  postCrmDealsImportRoute,
  postCrmDealsRoute,
  postCrmFilesRoute,
  postCrmNotesRoute,
  postCrmTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(postCrmAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmAttributesCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmAttributesDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmDealsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmDealsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmDealsLinkUnlinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmDealsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmFilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmFilesIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmNotesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelineDetailsPipelineIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmTasktypesRoute, (c) => {
    throw new Error('Not implemented')
  })

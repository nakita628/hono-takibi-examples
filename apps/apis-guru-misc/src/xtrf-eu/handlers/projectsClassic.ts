import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdFinancePayablesPayableIdRoute,
  deleteProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  deleteProjectsProjectIdRoute,
  getProjectsFilesFileIdDownloadRoute,
  getProjectsIdsRoute,
  getProjectsProjectIdContactsRoute,
  getProjectsProjectIdCustomFieldsRoute,
  getProjectsProjectIdDatesRoute,
  getProjectsProjectIdFinanceRoute,
  getProjectsProjectIdInstructionsRoute,
  getProjectsProjectIdRoute,
  postProjectsProjectIdFinancePayablesRoute,
  postProjectsProjectIdFinanceReceivablesRoute,
  postProjectsProjectIdLanguageCombinationsRoute,
  postProjectsProjectIdTasksRoute,
  postProjectsRoute,
  putProjectsProjectIdContactsRoute,
  putProjectsProjectIdCustomFieldsRoute,
  putProjectsProjectIdDatesRoute,
  putProjectsProjectIdFinancePayablesPayableIdRoute,
  putProjectsProjectIdFinanceReceivablesReceivableIdRoute,
  putProjectsProjectIdInstructionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsClassicHandler = app
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsFilesFileIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdDatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdFinanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdFinancePayablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdFinancePayablesPayableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdFinanceReceivablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdFinanceReceivablesReceivableIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectIdInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdLanguageCombinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmActivitiesIdRoute,
  deleteCrmCompaniesIdRoute,
  deleteCrmContactsIdRoute,
  deleteCrmLeadsIdRoute,
  deleteCrmNotesIdRoute,
  deleteCrmOpportunitiesIdRoute,
  deleteCrmPipelinesIdRoute,
  deleteCrmUsersIdRoute,
  getCrmActivitiesIdRoute,
  getCrmActivitiesRoute,
  getCrmCompaniesIdRoute,
  getCrmCompaniesRoute,
  getCrmContactsIdRoute,
  getCrmContactsRoute,
  getCrmLeadsIdRoute,
  getCrmLeadsRoute,
  getCrmNotesIdRoute,
  getCrmNotesRoute,
  getCrmOpportunitiesIdRoute,
  getCrmOpportunitiesRoute,
  getCrmPipelinesIdRoute,
  getCrmPipelinesRoute,
  getCrmUsersIdRoute,
  getCrmUsersRoute,
  patchCrmActivitiesIdRoute,
  patchCrmCompaniesIdRoute,
  patchCrmContactsIdRoute,
  patchCrmLeadsIdRoute,
  patchCrmNotesIdRoute,
  patchCrmOpportunitiesIdRoute,
  patchCrmPipelinesIdRoute,
  patchCrmUsersIdRoute,
  postCrmActivitiesRoute,
  postCrmCompaniesRoute,
  postCrmContactsRoute,
  postCrmLeadsRoute,
  postCrmNotesRoute,
  postCrmOpportunitiesRoute,
  postCrmPipelinesRoute,
  postCrmUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmActivitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmCompaniesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmLeadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmLeadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmLeadsIdRoute, (c) => {
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
  .openapi(getCrmOpportunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmOpportunitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmOpportunitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmPipelinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })

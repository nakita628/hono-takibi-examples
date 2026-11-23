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
} from './routes'
import {
  deleteCrmActivitiesIdRouteHandler,
  deleteCrmCompaniesIdRouteHandler,
  deleteCrmContactsIdRouteHandler,
  deleteCrmLeadsIdRouteHandler,
  deleteCrmNotesIdRouteHandler,
  deleteCrmOpportunitiesIdRouteHandler,
  deleteCrmPipelinesIdRouteHandler,
  deleteCrmUsersIdRouteHandler,
  getCrmActivitiesIdRouteHandler,
  getCrmActivitiesRouteHandler,
  getCrmCompaniesIdRouteHandler,
  getCrmCompaniesRouteHandler,
  getCrmContactsIdRouteHandler,
  getCrmContactsRouteHandler,
  getCrmLeadsIdRouteHandler,
  getCrmLeadsRouteHandler,
  getCrmNotesIdRouteHandler,
  getCrmNotesRouteHandler,
  getCrmOpportunitiesIdRouteHandler,
  getCrmOpportunitiesRouteHandler,
  getCrmPipelinesIdRouteHandler,
  getCrmPipelinesRouteHandler,
  getCrmUsersIdRouteHandler,
  getCrmUsersRouteHandler,
  patchCrmActivitiesIdRouteHandler,
  patchCrmCompaniesIdRouteHandler,
  patchCrmContactsIdRouteHandler,
  patchCrmLeadsIdRouteHandler,
  patchCrmNotesIdRouteHandler,
  patchCrmOpportunitiesIdRouteHandler,
  patchCrmPipelinesIdRouteHandler,
  patchCrmUsersIdRouteHandler,
  postCrmActivitiesRouteHandler,
  postCrmCompaniesRouteHandler,
  postCrmContactsRouteHandler,
  postCrmLeadsRouteHandler,
  postCrmNotesRouteHandler,
  postCrmOpportunitiesRouteHandler,
  postCrmPipelinesRouteHandler,
  postCrmUsersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmActivitiesRoute, getCrmActivitiesRouteHandler)
  .openapi(postCrmActivitiesRoute, postCrmActivitiesRouteHandler)
  .openapi(deleteCrmActivitiesIdRoute, deleteCrmActivitiesIdRouteHandler)
  .openapi(getCrmActivitiesIdRoute, getCrmActivitiesIdRouteHandler)
  .openapi(patchCrmActivitiesIdRoute, patchCrmActivitiesIdRouteHandler)
  .openapi(getCrmCompaniesRoute, getCrmCompaniesRouteHandler)
  .openapi(postCrmCompaniesRoute, postCrmCompaniesRouteHandler)
  .openapi(deleteCrmCompaniesIdRoute, deleteCrmCompaniesIdRouteHandler)
  .openapi(getCrmCompaniesIdRoute, getCrmCompaniesIdRouteHandler)
  .openapi(patchCrmCompaniesIdRoute, patchCrmCompaniesIdRouteHandler)
  .openapi(getCrmContactsRoute, getCrmContactsRouteHandler)
  .openapi(postCrmContactsRoute, postCrmContactsRouteHandler)
  .openapi(deleteCrmContactsIdRoute, deleteCrmContactsIdRouteHandler)
  .openapi(getCrmContactsIdRoute, getCrmContactsIdRouteHandler)
  .openapi(patchCrmContactsIdRoute, patchCrmContactsIdRouteHandler)
  .openapi(getCrmLeadsRoute, getCrmLeadsRouteHandler)
  .openapi(postCrmLeadsRoute, postCrmLeadsRouteHandler)
  .openapi(deleteCrmLeadsIdRoute, deleteCrmLeadsIdRouteHandler)
  .openapi(getCrmLeadsIdRoute, getCrmLeadsIdRouteHandler)
  .openapi(patchCrmLeadsIdRoute, patchCrmLeadsIdRouteHandler)
  .openapi(getCrmNotesRoute, getCrmNotesRouteHandler)
  .openapi(postCrmNotesRoute, postCrmNotesRouteHandler)
  .openapi(deleteCrmNotesIdRoute, deleteCrmNotesIdRouteHandler)
  .openapi(getCrmNotesIdRoute, getCrmNotesIdRouteHandler)
  .openapi(patchCrmNotesIdRoute, patchCrmNotesIdRouteHandler)
  .openapi(getCrmOpportunitiesRoute, getCrmOpportunitiesRouteHandler)
  .openapi(postCrmOpportunitiesRoute, postCrmOpportunitiesRouteHandler)
  .openapi(deleteCrmOpportunitiesIdRoute, deleteCrmOpportunitiesIdRouteHandler)
  .openapi(getCrmOpportunitiesIdRoute, getCrmOpportunitiesIdRouteHandler)
  .openapi(patchCrmOpportunitiesIdRoute, patchCrmOpportunitiesIdRouteHandler)
  .openapi(getCrmPipelinesRoute, getCrmPipelinesRouteHandler)
  .openapi(postCrmPipelinesRoute, postCrmPipelinesRouteHandler)
  .openapi(deleteCrmPipelinesIdRoute, deleteCrmPipelinesIdRouteHandler)
  .openapi(getCrmPipelinesIdRoute, getCrmPipelinesIdRouteHandler)
  .openapi(patchCrmPipelinesIdRoute, patchCrmPipelinesIdRouteHandler)
  .openapi(getCrmUsersRoute, getCrmUsersRouteHandler)
  .openapi(postCrmUsersRoute, postCrmUsersRouteHandler)
  .openapi(deleteCrmUsersIdRoute, deleteCrmUsersIdRouteHandler)
  .openapi(getCrmUsersIdRoute, getCrmUsersIdRouteHandler)
  .openapi(patchCrmUsersIdRoute, patchCrmUsersIdRouteHandler)

export default app

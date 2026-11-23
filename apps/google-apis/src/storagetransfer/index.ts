import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1JobNameRoute,
  deleteV1NameRoute,
  getV1GoogleServiceAccountsProjectIdRoute,
  getV1JobNameRoute,
  getV1NameRoute,
  getV1ProjectsProjectIdAgentPoolsRoute,
  getV1TransferJobsRoute,
  patchV1JobNameRoute,
  patchV1NameRoute,
  postV1JobNameRunRoute,
  postV1NameCancelRoute,
  postV1NamePauseRoute,
  postV1NameResumeRoute,
  postV1ProjectsProjectIdAgentPoolsRoute,
  postV1TransferJobsRoute,
} from './routes'
import {
  deleteV1JobNameRouteHandler,
  deleteV1NameRouteHandler,
  getV1GoogleServiceAccountsProjectIdRouteHandler,
  getV1JobNameRouteHandler,
  getV1NameRouteHandler,
  getV1ProjectsProjectIdAgentPoolsRouteHandler,
  getV1TransferJobsRouteHandler,
  patchV1JobNameRouteHandler,
  patchV1NameRouteHandler,
  postV1JobNameRunRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NamePauseRouteHandler,
  postV1NameResumeRouteHandler,
  postV1ProjectsProjectIdAgentPoolsRouteHandler,
  postV1TransferJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV1GoogleServiceAccountsProjectIdRoute,
    getV1GoogleServiceAccountsProjectIdRouteHandler,
  )
  .openapi(getV1ProjectsProjectIdAgentPoolsRoute, getV1ProjectsProjectIdAgentPoolsRouteHandler)
  .openapi(postV1ProjectsProjectIdAgentPoolsRoute, postV1ProjectsProjectIdAgentPoolsRouteHandler)
  .openapi(getV1TransferJobsRoute, getV1TransferJobsRouteHandler)
  .openapi(postV1TransferJobsRoute, postV1TransferJobsRouteHandler)
  .openapi(deleteV1JobNameRoute, deleteV1JobNameRouteHandler)
  .openapi(getV1JobNameRoute, getV1JobNameRouteHandler)
  .openapi(patchV1JobNameRoute, patchV1JobNameRouteHandler)
  .openapi(postV1JobNameRunRoute, postV1JobNameRunRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NamePauseRoute, postV1NamePauseRouteHandler)
  .openapi(postV1NameResumeRoute, postV1NameResumeRouteHandler)

export default app

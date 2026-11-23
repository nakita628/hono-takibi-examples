import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2InfoTypesRoute,
  getV2NameRoute,
  getV2ParentDeidentifyTemplatesRoute,
  getV2ParentDlpJobsRoute,
  getV2ParentInfoTypesRoute,
  getV2ParentInspectTemplatesRoute,
  getV2ParentJobTriggersRoute,
  getV2ParentStoredInfoTypesRoute,
  patchV2NameRoute,
  postV2NameActivateRoute,
  postV2NameCancelRoute,
  postV2NameFinishRoute,
  postV2NameHybridInspectRoute,
  postV2ParentContentDeidentifyRoute,
  postV2ParentContentInspectRoute,
  postV2ParentContentReidentifyRoute,
  postV2ParentDeidentifyTemplatesRoute,
  postV2ParentDlpJobsRoute,
  postV2ParentImageRedactRoute,
  postV2ParentInspectTemplatesRoute,
  postV2ParentJobTriggersRoute,
  postV2ParentStoredInfoTypesRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2InfoTypesRouteHandler,
  getV2NameRouteHandler,
  getV2ParentDeidentifyTemplatesRouteHandler,
  getV2ParentDlpJobsRouteHandler,
  getV2ParentInfoTypesRouteHandler,
  getV2ParentInspectTemplatesRouteHandler,
  getV2ParentJobTriggersRouteHandler,
  getV2ParentStoredInfoTypesRouteHandler,
  patchV2NameRouteHandler,
  postV2NameActivateRouteHandler,
  postV2NameCancelRouteHandler,
  postV2NameFinishRouteHandler,
  postV2NameHybridInspectRouteHandler,
  postV2ParentContentDeidentifyRouteHandler,
  postV2ParentContentInspectRouteHandler,
  postV2ParentContentReidentifyRouteHandler,
  postV2ParentDeidentifyTemplatesRouteHandler,
  postV2ParentDlpJobsRouteHandler,
  postV2ParentImageRedactRouteHandler,
  postV2ParentInspectTemplatesRouteHandler,
  postV2ParentJobTriggersRouteHandler,
  postV2ParentStoredInfoTypesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2InfoTypesRoute, getV2InfoTypesRouteHandler)
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(postV2NameActivateRoute, postV2NameActivateRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(postV2NameFinishRoute, postV2NameFinishRouteHandler)
  .openapi(postV2NameHybridInspectRoute, postV2NameHybridInspectRouteHandler)
  .openapi(postV2ParentContentDeidentifyRoute, postV2ParentContentDeidentifyRouteHandler)
  .openapi(postV2ParentContentInspectRoute, postV2ParentContentInspectRouteHandler)
  .openapi(postV2ParentContentReidentifyRoute, postV2ParentContentReidentifyRouteHandler)
  .openapi(getV2ParentDeidentifyTemplatesRoute, getV2ParentDeidentifyTemplatesRouteHandler)
  .openapi(postV2ParentDeidentifyTemplatesRoute, postV2ParentDeidentifyTemplatesRouteHandler)
  .openapi(getV2ParentDlpJobsRoute, getV2ParentDlpJobsRouteHandler)
  .openapi(postV2ParentDlpJobsRoute, postV2ParentDlpJobsRouteHandler)
  .openapi(postV2ParentImageRedactRoute, postV2ParentImageRedactRouteHandler)
  .openapi(getV2ParentInfoTypesRoute, getV2ParentInfoTypesRouteHandler)
  .openapi(getV2ParentInspectTemplatesRoute, getV2ParentInspectTemplatesRouteHandler)
  .openapi(postV2ParentInspectTemplatesRoute, postV2ParentInspectTemplatesRouteHandler)
  .openapi(getV2ParentJobTriggersRoute, getV2ParentJobTriggersRouteHandler)
  .openapi(postV2ParentJobTriggersRoute, postV2ParentJobTriggersRouteHandler)
  .openapi(getV2ParentStoredInfoTypesRoute, getV2ParentStoredInfoTypesRouteHandler)
  .openapi(postV2ParentStoredInfoTypesRoute, postV2ParentStoredInfoTypesRouteHandler)

export default app

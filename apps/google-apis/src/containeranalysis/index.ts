import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameNotesRoute,
  getV1beta1NameOccurrencesRoute,
  getV1beta1NameRoute,
  getV1beta1ParentNotesRoute,
  getV1beta1ParentOccurrencesRoute,
  getV1beta1ParentOccurrencesVulnerabilitySummaryRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentNotesBatchCreateRoute,
  postV1beta1ParentNotesRoute,
  postV1beta1ParentOccurrencesBatchCreateRoute,
  postV1beta1ParentOccurrencesRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameNotesRouteHandler,
  getV1beta1NameOccurrencesRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentNotesRouteHandler,
  getV1beta1ParentOccurrencesRouteHandler,
  getV1beta1ParentOccurrencesVulnerabilitySummaryRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentNotesBatchCreateRouteHandler,
  postV1beta1ParentNotesRouteHandler,
  postV1beta1ParentOccurrencesBatchCreateRouteHandler,
  postV1beta1ParentOccurrencesRouteHandler,
  postV1beta1ResourceGetIamPolicyRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameNotesRoute, getV1beta1NameNotesRouteHandler)
  .openapi(getV1beta1NameOccurrencesRoute, getV1beta1NameOccurrencesRouteHandler)
  .openapi(getV1beta1ParentNotesRoute, getV1beta1ParentNotesRouteHandler)
  .openapi(postV1beta1ParentNotesRoute, postV1beta1ParentNotesRouteHandler)
  .openapi(postV1beta1ParentNotesBatchCreateRoute, postV1beta1ParentNotesBatchCreateRouteHandler)
  .openapi(getV1beta1ParentOccurrencesRoute, getV1beta1ParentOccurrencesRouteHandler)
  .openapi(postV1beta1ParentOccurrencesRoute, postV1beta1ParentOccurrencesRouteHandler)
  .openapi(
    postV1beta1ParentOccurrencesBatchCreateRoute,
    postV1beta1ParentOccurrencesBatchCreateRouteHandler,
  )
  .openapi(
    getV1beta1ParentOccurrencesVulnerabilitySummaryRoute,
    getV1beta1ParentOccurrencesVulnerabilitySummaryRouteHandler,
  )
  .openapi(postV1beta1ResourceGetIamPolicyRoute, postV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app

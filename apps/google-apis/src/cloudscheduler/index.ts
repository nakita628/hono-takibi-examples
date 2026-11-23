import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentJobsRoute,
  patchV1beta1NameRoute,
  postV1beta1NamePauseRoute,
  postV1beta1NameResumeRoute,
  postV1beta1NameRunRoute,
  postV1beta1ParentJobsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentJobsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NamePauseRouteHandler,
  postV1beta1NameResumeRouteHandler,
  postV1beta1NameRunRouteHandler,
  postV1beta1ParentJobsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(postV1beta1NamePauseRoute, postV1beta1NamePauseRouteHandler)
  .openapi(postV1beta1NameResumeRoute, postV1beta1NameResumeRouteHandler)
  .openapi(postV1beta1NameRunRoute, postV1beta1NameRunRouteHandler)
  .openapi(getV1beta1ParentJobsRoute, getV1beta1ParentJobsRouteHandler)
  .openapi(postV1beta1ParentJobsRoute, postV1beta1ParentJobsRouteHandler)

export default app

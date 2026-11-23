import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExperimentsIdRoute,
  deleteExperimentTemplatesIdRoute,
  deleteTagsResourceArnRoute,
  getActionsIdRoute,
  getActionsRoute,
  getExperimentsIdRoute,
  getExperimentsRoute,
  getExperimentTemplatesIdRoute,
  getExperimentTemplatesRoute,
  getTagsResourceArnRoute,
  getTargetResourceTypesResourceTypeRoute,
  getTargetResourceTypesRoute,
  patchExperimentTemplatesIdRoute,
  postExperimentsRoute,
  postExperimentTemplatesRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteExperimentsIdRouteHandler,
  deleteExperimentTemplatesIdRouteHandler,
  deleteTagsResourceArnRouteHandler,
  getActionsIdRouteHandler,
  getActionsRouteHandler,
  getExperimentsIdRouteHandler,
  getExperimentsRouteHandler,
  getExperimentTemplatesIdRouteHandler,
  getExperimentTemplatesRouteHandler,
  getTagsResourceArnRouteHandler,
  getTargetResourceTypesResourceTypeRouteHandler,
  getTargetResourceTypesRouteHandler,
  patchExperimentTemplatesIdRouteHandler,
  postExperimentsRouteHandler,
  postExperimentTemplatesRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postExperimentTemplatesRoute, postExperimentTemplatesRouteHandler)
  .openapi(getExperimentTemplatesRoute, getExperimentTemplatesRouteHandler)
  .openapi(deleteExperimentTemplatesIdRoute, deleteExperimentTemplatesIdRouteHandler)
  .openapi(getExperimentTemplatesIdRoute, getExperimentTemplatesIdRouteHandler)
  .openapi(patchExperimentTemplatesIdRoute, patchExperimentTemplatesIdRouteHandler)
  .openapi(getActionsIdRoute, getActionsIdRouteHandler)
  .openapi(getExperimentsIdRoute, getExperimentsIdRouteHandler)
  .openapi(deleteExperimentsIdRoute, deleteExperimentsIdRouteHandler)
  .openapi(getTargetResourceTypesResourceTypeRoute, getTargetResourceTypesResourceTypeRouteHandler)
  .openapi(getActionsRoute, getActionsRouteHandler)
  .openapi(getExperimentsRoute, getExperimentsRouteHandler)
  .openapi(postExperimentsRoute, postExperimentsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnRoute, deleteTagsResourceArnRouteHandler)
  .openapi(getTargetResourceTypesRoute, getTargetResourceTypesRouteHandler)

export default app

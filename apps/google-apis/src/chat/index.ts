import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1MediaResourceNameRoute,
  getV1NameRoute,
  getV1ParentMembersRoute,
  getV1ParentMessagesRoute,
  getV1ParentReactionsRoute,
  getV1SpacesFindDirectMessageRoute,
  getV1SpacesRoute,
  patchV1NameRoute,
  postV1NameCompleteImportRoute,
  postV1ParentAttachmentsUploadRoute,
  postV1ParentMembersRoute,
  postV1ParentMessagesRoute,
  postV1ParentReactionsRoute,
  postV1SpacesRoute,
  postV1SpacesSetupRoute,
  putV1NameRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1MediaResourceNameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentMembersRouteHandler,
  getV1ParentMessagesRouteHandler,
  getV1ParentReactionsRouteHandler,
  getV1SpacesFindDirectMessageRouteHandler,
  getV1SpacesRouteHandler,
  patchV1NameRouteHandler,
  postV1NameCompleteImportRouteHandler,
  postV1ParentAttachmentsUploadRouteHandler,
  postV1ParentMembersRouteHandler,
  postV1ParentMessagesRouteHandler,
  postV1ParentReactionsRouteHandler,
  postV1SpacesRouteHandler,
  postV1SpacesSetupRouteHandler,
  putV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1MediaResourceNameRoute, getV1MediaResourceNameRouteHandler)
  .openapi(getV1SpacesRoute, getV1SpacesRouteHandler)
  .openapi(postV1SpacesRoute, postV1SpacesRouteHandler)
  .openapi(getV1SpacesFindDirectMessageRoute, getV1SpacesFindDirectMessageRouteHandler)
  .openapi(postV1SpacesSetupRoute, postV1SpacesSetupRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(putV1NameRoute, putV1NameRouteHandler)
  .openapi(postV1NameCompleteImportRoute, postV1NameCompleteImportRouteHandler)
  .openapi(postV1ParentAttachmentsUploadRoute, postV1ParentAttachmentsUploadRouteHandler)
  .openapi(getV1ParentMembersRoute, getV1ParentMembersRouteHandler)
  .openapi(postV1ParentMembersRoute, postV1ParentMembersRouteHandler)
  .openapi(getV1ParentMessagesRoute, getV1ParentMessagesRouteHandler)
  .openapi(postV1ParentMessagesRoute, postV1ParentMessagesRouteHandler)
  .openapi(getV1ParentReactionsRoute, getV1ParentReactionsRouteHandler)
  .openapi(postV1ParentReactionsRoute, postV1ParentReactionsRouteHandler)

export default app

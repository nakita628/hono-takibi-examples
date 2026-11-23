import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PhotoPhotoIdRoute,
  deleteV1PhotoSequenceSequenceIdRoute,
  getV1PhotoPhotoIdRoute,
  getV1PhotosBatchGetRoute,
  getV1PhotoSequenceSequenceIdRoute,
  getV1PhotoSequencesRoute,
  getV1PhotosRoute,
  postV1PhotoRoute,
  postV1PhotosBatchDeleteRoute,
  postV1PhotosBatchUpdateRoute,
  postV1PhotoSequenceRoute,
  postV1PhotoSequenceStartUploadRoute,
  postV1PhotoStartUploadRoute,
  putV1PhotoIdRoute,
} from './routes'
import {
  deleteV1PhotoPhotoIdRouteHandler,
  deleteV1PhotoSequenceSequenceIdRouteHandler,
  getV1PhotoPhotoIdRouteHandler,
  getV1PhotosBatchGetRouteHandler,
  getV1PhotoSequenceSequenceIdRouteHandler,
  getV1PhotoSequencesRouteHandler,
  getV1PhotosRouteHandler,
  postV1PhotoRouteHandler,
  postV1PhotosBatchDeleteRouteHandler,
  postV1PhotosBatchUpdateRouteHandler,
  postV1PhotoSequenceRouteHandler,
  postV1PhotoSequenceStartUploadRouteHandler,
  postV1PhotoStartUploadRouteHandler,
  putV1PhotoIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1PhotoRoute, postV1PhotoRouteHandler)
  .openapi(putV1PhotoIdRoute, putV1PhotoIdRouteHandler)
  .openapi(deleteV1PhotoPhotoIdRoute, deleteV1PhotoPhotoIdRouteHandler)
  .openapi(getV1PhotoPhotoIdRoute, getV1PhotoPhotoIdRouteHandler)
  .openapi(postV1PhotoStartUploadRoute, postV1PhotoStartUploadRouteHandler)
  .openapi(postV1PhotoSequenceRoute, postV1PhotoSequenceRouteHandler)
  .openapi(deleteV1PhotoSequenceSequenceIdRoute, deleteV1PhotoSequenceSequenceIdRouteHandler)
  .openapi(getV1PhotoSequenceSequenceIdRoute, getV1PhotoSequenceSequenceIdRouteHandler)
  .openapi(postV1PhotoSequenceStartUploadRoute, postV1PhotoSequenceStartUploadRouteHandler)
  .openapi(getV1PhotoSequencesRoute, getV1PhotoSequencesRouteHandler)
  .openapi(getV1PhotosRoute, getV1PhotosRouteHandler)
  .openapi(postV1PhotosBatchDeleteRoute, postV1PhotosBatchDeleteRouteHandler)
  .openapi(getV1PhotosBatchGetRoute, getV1PhotosBatchGetRouteHandler)
  .openapi(postV1PhotosBatchUpdateRoute, postV1PhotosBatchUpdateRouteHandler)

export default app

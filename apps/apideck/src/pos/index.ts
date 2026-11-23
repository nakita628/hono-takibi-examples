import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosItemsIdRoute,
  deletePosLocationsIdRoute,
  deletePosMerchantsIdRoute,
  deletePosModifierGroupsIdRoute,
  deletePosModifiersIdRoute,
  deletePosOrdersIdRoute,
  deletePosOrderTypesIdRoute,
  deletePosPaymentsIdRoute,
  deletePosTendersIdRoute,
  getPosItemsIdRoute,
  getPosItemsRoute,
  getPosLocationsIdRoute,
  getPosLocationsRoute,
  getPosMerchantsIdRoute,
  getPosMerchantsRoute,
  getPosModifierGroupsIdRoute,
  getPosModifierGroupsRoute,
  getPosModifiersIdRoute,
  getPosModifiersRoute,
  getPosOrdersIdRoute,
  getPosOrdersRoute,
  getPosOrderTypesIdRoute,
  getPosOrderTypesRoute,
  getPosPaymentsIdRoute,
  getPosPaymentsRoute,
  getPosTendersIdRoute,
  getPosTendersRoute,
  patchPosItemsIdRoute,
  patchPosLocationsIdRoute,
  patchPosMerchantsIdRoute,
  patchPosModifierGroupsIdRoute,
  patchPosModifiersIdRoute,
  patchPosOrdersIdRoute,
  patchPosOrderTypesIdRoute,
  patchPosPaymentsIdRoute,
  patchPosTendersIdRoute,
  postPosItemsRoute,
  postPosLocationsRoute,
  postPosMerchantsRoute,
  postPosModifierGroupsRoute,
  postPosModifiersRoute,
  postPosOrdersIdPayRoute,
  postPosOrdersRoute,
  postPosOrderTypesRoute,
  postPosPaymentsRoute,
  postPosTendersRoute,
} from './routes'
import {
  deletePosItemsIdRouteHandler,
  deletePosLocationsIdRouteHandler,
  deletePosMerchantsIdRouteHandler,
  deletePosModifierGroupsIdRouteHandler,
  deletePosModifiersIdRouteHandler,
  deletePosOrdersIdRouteHandler,
  deletePosOrderTypesIdRouteHandler,
  deletePosPaymentsIdRouteHandler,
  deletePosTendersIdRouteHandler,
  getPosItemsIdRouteHandler,
  getPosItemsRouteHandler,
  getPosLocationsIdRouteHandler,
  getPosLocationsRouteHandler,
  getPosMerchantsIdRouteHandler,
  getPosMerchantsRouteHandler,
  getPosModifierGroupsIdRouteHandler,
  getPosModifierGroupsRouteHandler,
  getPosModifiersIdRouteHandler,
  getPosModifiersRouteHandler,
  getPosOrdersIdRouteHandler,
  getPosOrdersRouteHandler,
  getPosOrderTypesIdRouteHandler,
  getPosOrderTypesRouteHandler,
  getPosPaymentsIdRouteHandler,
  getPosPaymentsRouteHandler,
  getPosTendersIdRouteHandler,
  getPosTendersRouteHandler,
  patchPosItemsIdRouteHandler,
  patchPosLocationsIdRouteHandler,
  patchPosMerchantsIdRouteHandler,
  patchPosModifierGroupsIdRouteHandler,
  patchPosModifiersIdRouteHandler,
  patchPosOrdersIdRouteHandler,
  patchPosOrderTypesIdRouteHandler,
  patchPosPaymentsIdRouteHandler,
  patchPosTendersIdRouteHandler,
  postPosItemsRouteHandler,
  postPosLocationsRouteHandler,
  postPosMerchantsRouteHandler,
  postPosModifierGroupsRouteHandler,
  postPosModifiersRouteHandler,
  postPosOrdersIdPayRouteHandler,
  postPosOrdersRouteHandler,
  postPosOrderTypesRouteHandler,
  postPosPaymentsRouteHandler,
  postPosTendersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPosItemsRoute, getPosItemsRouteHandler)
  .openapi(postPosItemsRoute, postPosItemsRouteHandler)
  .openapi(deletePosItemsIdRoute, deletePosItemsIdRouteHandler)
  .openapi(getPosItemsIdRoute, getPosItemsIdRouteHandler)
  .openapi(patchPosItemsIdRoute, patchPosItemsIdRouteHandler)
  .openapi(getPosLocationsRoute, getPosLocationsRouteHandler)
  .openapi(postPosLocationsRoute, postPosLocationsRouteHandler)
  .openapi(deletePosLocationsIdRoute, deletePosLocationsIdRouteHandler)
  .openapi(getPosLocationsIdRoute, getPosLocationsIdRouteHandler)
  .openapi(patchPosLocationsIdRoute, patchPosLocationsIdRouteHandler)
  .openapi(getPosMerchantsRoute, getPosMerchantsRouteHandler)
  .openapi(postPosMerchantsRoute, postPosMerchantsRouteHandler)
  .openapi(deletePosMerchantsIdRoute, deletePosMerchantsIdRouteHandler)
  .openapi(getPosMerchantsIdRoute, getPosMerchantsIdRouteHandler)
  .openapi(patchPosMerchantsIdRoute, patchPosMerchantsIdRouteHandler)
  .openapi(getPosModifierGroupsRoute, getPosModifierGroupsRouteHandler)
  .openapi(postPosModifierGroupsRoute, postPosModifierGroupsRouteHandler)
  .openapi(deletePosModifierGroupsIdRoute, deletePosModifierGroupsIdRouteHandler)
  .openapi(getPosModifierGroupsIdRoute, getPosModifierGroupsIdRouteHandler)
  .openapi(patchPosModifierGroupsIdRoute, patchPosModifierGroupsIdRouteHandler)
  .openapi(getPosModifiersRoute, getPosModifiersRouteHandler)
  .openapi(postPosModifiersRoute, postPosModifiersRouteHandler)
  .openapi(deletePosModifiersIdRoute, deletePosModifiersIdRouteHandler)
  .openapi(getPosModifiersIdRoute, getPosModifiersIdRouteHandler)
  .openapi(patchPosModifiersIdRoute, patchPosModifiersIdRouteHandler)
  .openapi(getPosOrderTypesRoute, getPosOrderTypesRouteHandler)
  .openapi(postPosOrderTypesRoute, postPosOrderTypesRouteHandler)
  .openapi(deletePosOrderTypesIdRoute, deletePosOrderTypesIdRouteHandler)
  .openapi(getPosOrderTypesIdRoute, getPosOrderTypesIdRouteHandler)
  .openapi(patchPosOrderTypesIdRoute, patchPosOrderTypesIdRouteHandler)
  .openapi(getPosOrdersRoute, getPosOrdersRouteHandler)
  .openapi(postPosOrdersRoute, postPosOrdersRouteHandler)
  .openapi(deletePosOrdersIdRoute, deletePosOrdersIdRouteHandler)
  .openapi(getPosOrdersIdRoute, getPosOrdersIdRouteHandler)
  .openapi(patchPosOrdersIdRoute, patchPosOrdersIdRouteHandler)
  .openapi(postPosOrdersIdPayRoute, postPosOrdersIdPayRouteHandler)
  .openapi(getPosPaymentsRoute, getPosPaymentsRouteHandler)
  .openapi(postPosPaymentsRoute, postPosPaymentsRouteHandler)
  .openapi(deletePosPaymentsIdRoute, deletePosPaymentsIdRouteHandler)
  .openapi(getPosPaymentsIdRoute, getPosPaymentsIdRouteHandler)
  .openapi(patchPosPaymentsIdRoute, patchPosPaymentsIdRouteHandler)
  .openapi(getPosTendersRoute, getPosTendersRouteHandler)
  .openapi(postPosTendersRoute, postPosTendersRouteHandler)
  .openapi(deletePosTendersIdRoute, deletePosTendersIdRouteHandler)
  .openapi(getPosTendersIdRoute, getPosTendersIdRouteHandler)
  .openapi(patchPosTendersIdRoute, patchPosTendersIdRouteHandler)

export default app

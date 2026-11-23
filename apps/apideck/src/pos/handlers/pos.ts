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
} from '../routes'

const app = new OpenAPIHono()

export const posHandler = app
  .openapi(getPosItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosModifierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosModifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrdersIdPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosTendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosTendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })

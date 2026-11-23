import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsmGroupsGroupIdRoute,
  deleteAsmGroupsGroupIdSuppressionsEmailRoute,
  deleteAsmSuppressionsGlobalEmailRoute,
  getAsmGroupsGroupIdRoute,
  getAsmGroupsGroupIdSuppressionsRoute,
  getAsmGroupsRoute,
  getAsmSuppressionsEmailRoute,
  getAsmSuppressionsGlobalEmailRoute,
  getAsmSuppressionsRoute,
  patchAsmGroupsGroupIdRoute,
  postAsmGroupsGroupIdSuppressionsRoute,
  postAsmGroupsGroupIdSuppressionsSearchRoute,
  postAsmGroupsRoute,
  postAsmSuppressionsGlobalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const asmHandler = app
  .openapi(getAsmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAsmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmGroupsGroupIdSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsmGroupsGroupIdSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsmGroupsGroupIdSuppressionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsmGroupsGroupIdSuppressionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmSuppressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAsmSuppressionsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsmSuppressionsGlobalEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmSuppressionsGlobalEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmSuppressionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

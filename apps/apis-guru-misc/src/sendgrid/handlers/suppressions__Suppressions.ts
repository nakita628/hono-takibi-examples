import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsmGroupsGroupIdSuppressionsEmailRoute,
  getAsmGroupsGroupIdSuppressionsRoute,
  getAsmSuppressionsEmailRoute,
  getAsmSuppressionsRoute,
  postAsmGroupsGroupIdSuppressionsRoute,
  postAsmGroupsGroupIdSuppressionsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppressions__SuppressionsHandler = app
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
  .openapi(getAsmSuppressionsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

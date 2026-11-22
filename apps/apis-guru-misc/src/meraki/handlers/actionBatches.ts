import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
  getOrganizationsOrganizationIdActionBatchesRoute,
  postOrganizationsOrganizationIdActionBatchesRoute,
  putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionBatchesHandler = app
  .openapi(getOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdActionBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdActionBatchesActionBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

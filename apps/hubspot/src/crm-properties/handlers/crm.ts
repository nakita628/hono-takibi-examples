import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  deleteCrmProperties202609ObjectTypePropertyNameRoute,
  getCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  getCrmProperties202609ObjectTypeGroupsRoute,
  getCrmProperties202609ObjectTypePropertyNameRoute,
  getCrmProperties202609ObjectTypeRoute,
  patchCrmProperties202609ObjectTypeGroupsGroupNameRoute,
  patchCrmProperties202609ObjectTypePropertyNameRoute,
  postCrmProperties202609ObjectTypeBatchArchiveRoute,
  postCrmProperties202609ObjectTypeBatchCreateRoute,
  postCrmProperties202609ObjectTypeBatchReadRoute,
  postCrmProperties202609ObjectTypeGroupsRoute,
  postCrmProperties202609ObjectTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmProperties202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmProperties202609ObjectTypeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmProperties202609ObjectTypeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmProperties202609ObjectTypeGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmProperties202609ObjectTypeGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmProperties202609ObjectTypeGroupsGroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmProperties202609ObjectTypePropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmProperties202609ObjectTypePropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmProperties202609ObjectTypePropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })

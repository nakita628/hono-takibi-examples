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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1MediaResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SpacesFindDirectMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SpacesSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCompleteImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAttachmentsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })

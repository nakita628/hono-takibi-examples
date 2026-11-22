import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1WorkspacesCreateRoute,
  postV1WorkspacesDeleteRoute,
  postV1WorkspacesGetByConnectionIdRoute,
  postV1WorkspacesGetBySlugRoute,
  postV1WorkspacesGetRoute,
  postV1WorkspacesListRoute,
  postV1WorkspacesTagFeedbackStatusAsDoneRoute,
  postV1WorkspacesUpdateNameRoute,
  postV1WorkspacesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceHandler = app
  .openapi(postV1WorkspacesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetByConnectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesGetBySlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesTagFeedbackStatusAsDoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkspacesUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })

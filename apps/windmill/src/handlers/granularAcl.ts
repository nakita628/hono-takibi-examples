import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceAccessGetRoute,
  getWWorkspaceAclsGetKindPathRoute,
  postWWorkspaceAclsAddKindPathRoute,
  postWWorkspaceAclsRemoveKindPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const granularAclHandler = app
  .openapi(getWWorkspaceAccessGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceAclsGetKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAclsAddKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceAclsRemoveKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })

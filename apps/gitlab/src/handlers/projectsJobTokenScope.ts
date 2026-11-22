import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdJobTokenScopeAllowlistTargetProjectIdRoute,
  deleteApiV4ProjectsIdJobTokenScopeGroupsAllowlistTargetGroupIdRoute,
  getApiV4ProjectsIdJobTokenScopeAllowlistRoute,
  getApiV4ProjectsIdJobTokenScopeGroupsAllowlistRoute,
  getApiV4ProjectsIdJobTokenScopeRoute,
  patchApiV4ProjectsIdJobTokenScopeRoute,
  postApiV4ProjectsIdJobTokenScopeAllowlistRoute,
  postApiV4ProjectsIdJobTokenScopeGroupsAllowlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsJobTokenScopeHandler = app
  .openapi(getApiV4ProjectsIdJobTokenScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV4ProjectsIdJobTokenScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobTokenScopeAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobTokenScopeAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdJobTokenScopeGroupsAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdJobTokenScopeGroupsAllowlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdJobTokenScopeGroupsAllowlistTargetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdJobTokenScopeAllowlistTargetProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })

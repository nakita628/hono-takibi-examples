import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectProjectIdOrKeyRoute,
  getRestApi3ProjectProjectIdHierarchyRoute,
  getRestApi3ProjectProjectIdOrKeyRoute,
  getRestApi3ProjectProjectIdOrKeyStatusesRoute,
  getRestApi3ProjectProjectKeyOrIdNotificationschemeRoute,
  getRestApi3ProjectRecentRoute,
  getRestApi3ProjectRoute,
  getRestApi3ProjectSearchRoute,
  postRestApi3ProjectProjectIdOrKeyArchiveRoute,
  postRestApi3ProjectProjectIdOrKeyDeleteRoute,
  postRestApi3ProjectProjectIdOrKeyRestoreRoute,
  postRestApi3ProjectRoute,
  putRestApi3ProjectProjectIdOrKeyRoute,
  putRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getRestApi3ProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ProjectProjectIdOrKeyRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectKeyOrIdNotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })

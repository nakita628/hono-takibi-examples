import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3UserAssignableMultiProjectSearchRoute,
  getRestApi3UserAssignableSearchRoute,
  getRestApi3UserPermissionSearchRoute,
  getRestApi3UserPickerRoute,
  getRestApi3UserSearchQueryKeyRoute,
  getRestApi3UserSearchQueryRoute,
  getRestApi3UserSearchRoute,
  getRestApi3UserViewissueSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSearchHandler = app
  .openapi(getRestApi3UserAssignableMultiProjectSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserAssignableSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPermissionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserSearchQueryKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserViewissueSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdBadgesBadgeIdRoute,
  deleteApiV4ProjectsIdBadgesBadgeIdRoute,
  getApiV4GroupsIdBadgesBadgeIdRoute,
  getApiV4GroupsIdBadgesRenderRoute,
  getApiV4GroupsIdBadgesRoute,
  getApiV4ProjectsIdBadgesBadgeIdRoute,
  getApiV4ProjectsIdBadgesRenderRoute,
  getApiV4ProjectsIdBadgesRoute,
  postApiV4GroupsIdBadgesRoute,
  postApiV4ProjectsIdBadgesRoute,
  putApiV4GroupsIdBadgesBadgeIdRoute,
  putApiV4ProjectsIdBadgesBadgeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const badgesHandler = app
  .openapi(getApiV4GroupsIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBadgesRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBadgesRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdBadgesBadgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

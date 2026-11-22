import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdRoute,
  deleteAppsAppIdVersionsVersionRoute,
  getAppsAppIdRoute,
  getAppsAppIdVersionsVersionRoute,
  getAppsBySafeNameSafeNameRoute,
  getAppsRoute,
  getAppsTextSearchRoute,
  getAppsVersionsRoute,
  patchAppsAppIdVersionsVersionRoute,
  postAppsAppIdLiveRoute,
  postAppsAppIdPublishRoute,
  postAppsAppIdVersionsVersionRoute,
  postAppsAppIdVersionsVersionStatusRoute,
  postAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsFindAndModifyAppsHandler = app
  .openapi(getAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsBySafeNameSafeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsTextSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdVersionsVersionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

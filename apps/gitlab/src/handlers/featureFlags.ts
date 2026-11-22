import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute,
  deleteApiV4ProjectsIdFeatureFlagsUserListsIidRoute,
  getApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute,
  getApiV4ProjectsIdFeatureFlagsRoute,
  getApiV4ProjectsIdFeatureFlagsSettingsRoute,
  getApiV4ProjectsIdFeatureFlagsUserListsIidRoute,
  getApiV4ProjectsIdFeatureFlagsUserListsRoute,
  postApiV4ProjectsIdFeatureFlagsRoute,
  postApiV4ProjectsIdFeatureFlagsUserListsRoute,
  putApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute,
  putApiV4ProjectsIdFeatureFlagsSettingsRoute,
  putApiV4ProjectsIdFeatureFlagsUserListsIidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app
  .openapi(getApiV4ProjectsIdFeatureFlagsUserListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdFeatureFlagsUserListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdFeatureFlagsUserListsIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdFeatureFlagsUserListsIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdFeatureFlagsUserListsIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdFeatureFlagsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdFeatureFlagsFeatureFlagNameRoute, (c) => {
    throw new Error('Not implemented')
  })

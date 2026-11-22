import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  getOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  getOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  getOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  getOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  postOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  postOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  postOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  postOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsUiHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })

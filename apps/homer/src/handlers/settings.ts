import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdvancedGuidRoute,
  deleteMeSettingsCategoryRoute,
  deleteScriptsScriptIdRoute,
  getAdvancedGuidRoute,
  getAdvancedRoute,
  getMeSettingsRoute,
  getScriptsRoute,
  getScriptsScriptIdRoute,
  postAdvancedRoute,
  postScriptsRoute,
  putAdvancedGuidRoute,
  putMeSettingsCategoryRoute,
  putScriptsScriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getMeSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeSettingsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeSettingsCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdvancedGuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScriptsScriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })

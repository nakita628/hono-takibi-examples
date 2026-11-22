import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute,
  deleteAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute,
  deleteAppCatalogsTeamsAppsTeamsAppIdRoute,
  getAppCatalogsTeamsAppsRoute,
  getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsRoute,
  getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute,
  getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute,
  getAppCatalogsTeamsAppsTeamsAppIdRoute,
  patchAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute,
  patchAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute,
  patchAppCatalogsTeamsAppsTeamsAppIdRoute,
  postAppCatalogsTeamsAppsRoute,
  postAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appCatalogsTeamsAppHandler = app
  .openapi(getAppCatalogsTeamsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppCatalogsTeamsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppCatalogsTeamsAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCatalogsTeamsAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppCatalogsTeamsAppsTeamsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppCatalogsTeamsAppsTeamsAppIdAppDefinitionsTeamsAppDefinitionIdBotRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCountRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesCountRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
  getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  getDirectoryCustomSecurityAttributeDefinitionsRoute,
  patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
  patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
  postDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
  postDirectoryCustomSecurityAttributeDefinitionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryCustomSecurityAttributeDefinitionHandler = app
  .openapi(getDirectoryCustomSecurityAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryCustomSecurityAttributeDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesAllowedValueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDirectoryCustomSecurityAttributeDefinitionsCustomSecurityAttributeDefinitionIdAllowedValuesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDirectoryCustomSecurityAttributeDefinitionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

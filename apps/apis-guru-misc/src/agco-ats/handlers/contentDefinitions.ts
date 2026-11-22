import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
  deleteApiV2ContentDefinitionsContentDefinitionIDRoute,
  getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
  getApiV2ContentDefinitionsContentDefinitionIDRoute,
  getApiV2ContentDefinitionsRoute,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute,
  postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute,
  postApiV2ContentDefinitionsRoute,
  putApiV2ContentDefinitionAttributesBatchRoute,
  putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute,
  putApiV2ContentDefinitionsContentDefinitionIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentDefinitionsHandler = app
  .openapi(putApiV2ContentDefinitionAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentDefinitionAttributesContentDefinitionAttributeIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ContentDefinitionsContentDefinitionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ContentDefinitionsContentDefinitionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsContentDefinitionIDAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ContentDefinitionsContentDefinitionIDAttributesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })

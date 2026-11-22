import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdRoute,
  deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsRoute,
  deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagNameRoute,
  getApiV4GroupsIdRegistryRepositoriesRoute,
  getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsRoute,
  getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagNameRoute,
  getApiV4ProjectsIdRegistryRepositoriesRoute,
  getApiV4RegistryRepositoriesIdRoute,
  postApiV4ContainerRegistryEventEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const containerRegistryHandler = app
  .openapi(getApiV4ProjectsIdRegistryRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdRegistryRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4RegistryRepositoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ContainerRegistryEventEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

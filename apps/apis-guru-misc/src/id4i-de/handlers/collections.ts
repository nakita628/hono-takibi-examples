import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CollectionsId4nElementsRoute,
  deleteApiV1CollectionsId4nRoute,
  deleteApiV1Id4nsId4nPropertiesRoute,
  getApiV1CollectionsId4nElementsRoute,
  getApiV1CollectionsId4nRoute,
  getApiV1Id4nsId4nPropertiesRoute,
  getApiV1MultipleId4nsPropertiesRoute,
  getApiV1OrganizationsOrganizationIdCollectionsRoute,
  patchApiV1CollectionsId4nRoute,
  patchApiV1Id4nsId4nPropertiesRoute,
  postApiV1CollectionsId4nElementsRoute,
  postApiV1CollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(postApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MultipleId4nsPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })

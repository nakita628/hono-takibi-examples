import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  getOrganizationsOrganizationUuidCategoriesV2Route,
  patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute,
  postOrganizationsOrganizationUuidCategoriesV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getOrganizationsOrganizationUuidCategoriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationUuidCategoriesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationUuidCategoriesV2CategoryUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

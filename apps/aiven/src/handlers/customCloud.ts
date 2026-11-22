import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
  getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
  getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
  postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRoute,
  postOrganizationOrganizationIdCustomCloudEnvironmentsRoute,
  putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
  putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customCloudHandler = app
  .openapi(postOrganizationOrganizationIdCustomCloudEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdPermissionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationOrganizationIdCustomCloudEnvironmentsCustomCloudEnvironmentIdProvisionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

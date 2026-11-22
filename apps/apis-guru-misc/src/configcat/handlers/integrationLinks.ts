import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
  getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute,
  postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
  postV1JiraConnectRoute,
  postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationLinksHandler = app
  .openapi(
    deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1IntegrationLinkIntegrationLinkTypeKeyDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JiraConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

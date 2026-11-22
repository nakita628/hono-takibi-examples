import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPeopleItemInsightsRoute,
  deleteAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  deleteAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  deleteAdminPeopleProfileSourcesProfileSourceIdRoute,
  deleteAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  getAdminPeopleItemInsightsRoute,
  getAdminPeopleProfileCardPropertiesCountRoute,
  getAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  getAdminPeopleProfileCardPropertiesRoute,
  getAdminPeopleProfilePropertySettingsCountRoute,
  getAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  getAdminPeopleProfilePropertySettingsRoute,
  getAdminPeopleProfileSourcesCountRoute,
  getAdminPeopleProfileSourcesProfileSourceIdRoute,
  getAdminPeopleProfileSourcesRoute,
  getAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  getAdminPeoplePronounsRoute,
  getAdminPeopleRoute,
  patchAdminPeopleItemInsightsRoute,
  patchAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute,
  patchAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute,
  patchAdminPeopleProfileSourcesProfileSourceIdRoute,
  patchAdminPeopleProfileSourcesSourceIdSourceIdRoute,
  patchAdminPeoplePronounsRoute,
  postAdminPeopleProfileCardPropertiesRoute,
  postAdminPeopleProfilePropertySettingsRoute,
  postAdminPeopleProfileSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminPeopleAdminSettingsHandler = app
  .openapi(getAdminPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeopleItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPeopleItemInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileCardPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPeopleProfileCardPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPeopleProfileCardPropertiesProfileCardPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileCardPropertiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfilePropertySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPeopleProfilePropertySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPeopleProfilePropertySettingsProfilePropertySettingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfilePropertySettingsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPeopleProfileSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileSourcesProfileSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeopleProfileSourcesProfileSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPeopleProfileSourcesProfileSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileSourcesSourceIdSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeopleProfileSourcesSourceIdSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPeopleProfileSourcesSourceIdSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeopleProfileSourcesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPeoplePronounsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminPeoplePronounsRoute, (c) => {
    throw new Error('Not implemented')
  })

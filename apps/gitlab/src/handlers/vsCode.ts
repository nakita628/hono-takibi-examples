import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4VscodeSettingsSyncSettingsContextHashV1CollectionRoute,
  deleteApiV4VscodeSettingsSyncV1CollectionRoute,
  getApiV4VscodeSettingsSyncSettingsContextHashV1ManifestRoute,
  getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameIdRoute,
  getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameRoute,
  getApiV4VscodeSettingsSyncV1ManifestRoute,
  getApiV4VscodeSettingsSyncV1ResourceResourceNameIdRoute,
  getApiV4VscodeSettingsSyncV1ResourceResourceNameRoute,
  postApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameRoute,
  postApiV4VscodeSettingsSyncV1ResourceResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vsCodeHandler = app
  .openapi(getApiV4VscodeSettingsSyncV1ManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VscodeSettingsSyncSettingsContextHashV1ManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VscodeSettingsSyncV1ResourceResourceNameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VscodeSettingsSyncV1ResourceResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VscodeSettingsSyncV1ResourceResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4VscodeSettingsSyncSettingsContextHashV1ResourceResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4VscodeSettingsSyncV1CollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4VscodeSettingsSyncSettingsContextHashV1CollectionRoute, (c) => {
    throw new Error('Not implemented')
  })

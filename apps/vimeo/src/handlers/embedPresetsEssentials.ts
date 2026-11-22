import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMePresetsPresetIdRoute,
  getMePresetsRoute,
  getUsersUserIdPresetsPresetIdRoute,
  getUsersUserIdPresetsRoute,
  patchMePresetsPresetIdRoute,
  patchUsersUserIdPresetsPresetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const embedPresetsEssentialsHandler = app
  .openapi(getMePresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPresetsPresetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

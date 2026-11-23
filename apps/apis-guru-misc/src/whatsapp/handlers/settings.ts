import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsAccountTwoStepRoute,
  deleteSettingsApplicationMediaProvidersProviderNameRoute,
  deleteSettingsApplicationRoute,
  deleteSettingsProfilePhotoRoute,
  getSettingsApplicationMediaProvidersRoute,
  getSettingsApplicationRoute,
  getSettingsBusinessProfileRoute,
  getSettingsProfileAboutRoute,
  getSettingsProfilePhotoRoute,
  patchSettingsApplicationRoute,
  patchSettingsProfileAboutRoute,
  postSettingsAccountTwoStepRoute,
  postSettingsApplicationMediaProvidersRoute,
  postSettingsBackupRoute,
  postSettingsBusinessProfileRoute,
  postSettingsProfilePhotoRoute,
  postSettingsRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(deleteSettingsAccountTwoStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsAccountTwoStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsApplicationMediaProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsApplicationMediaProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsApplicationMediaProvidersProviderNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsBusinessProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsProfileAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsProfileAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsProfilePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsProfilePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsProfilePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })

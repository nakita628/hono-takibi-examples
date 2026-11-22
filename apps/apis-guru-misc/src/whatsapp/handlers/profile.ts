import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSettingsProfileAboutRoute,
  getSettingsProfilePhotoRoute,
  patchSettingsProfileAboutRoute,
  postSettingsProfilePhotoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getSettingsProfileAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSettingsProfileAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsProfilePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsProfilePhotoRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminMicrosoft365AppsInstallationOptionsRoute,
  deleteAdminMicrosoft365AppsRoute,
  getAdminMicrosoft365AppsInstallationOptionsRoute,
  getAdminMicrosoft365AppsRoute,
  patchAdminMicrosoft365AppsInstallationOptionsRoute,
  patchAdminMicrosoft365AppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminAdminMicrosoft365AppsHandler = app
  .openapi(getAdminMicrosoft365AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminMicrosoft365AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminMicrosoft365AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMicrosoft365AppsInstallationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminMicrosoft365AppsInstallationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminMicrosoft365AppsInstallationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

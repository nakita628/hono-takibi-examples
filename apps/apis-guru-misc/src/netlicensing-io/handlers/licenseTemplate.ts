import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicensetemplateLicenseTemplateNumberRoute,
  getLicensetemplateLicenseTemplateNumberRoute,
  getLicensetemplateRoute,
  postLicensetemplateLicenseTemplateNumberRoute,
  postLicensetemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseTemplateHandler = app
  .openapi(getLicensetemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicensetemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLicensetemplateLicenseTemplateNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensetemplateLicenseTemplateNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicensetemplateLicenseTemplateNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

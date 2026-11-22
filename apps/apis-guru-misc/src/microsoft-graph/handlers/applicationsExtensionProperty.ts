import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  getApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  getApplicationsApplicationIdExtensionPropertiesRoute,
  patchApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute,
  postApplicationsApplicationIdExtensionPropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsExtensionPropertyHandler = app
  .openapi(getApplicationsApplicationIdExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdExtensionPropertiesExtensionPropertyIdRoute, (c) => {
    throw new Error('Not implemented')
  })

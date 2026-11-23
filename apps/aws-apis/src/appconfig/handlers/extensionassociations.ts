import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExtensionassociationsExtensionAssociationIdRoute,
  getExtensionassociationsExtensionAssociationIdRoute,
  getExtensionassociationsRoute,
  patchExtensionassociationsExtensionAssociationIdRoute,
  postExtensionassociationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extensionassociationsHandler = app
  .openapi(postExtensionassociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionassociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtensionassociationsExtensionAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtensionassociationsExtensionAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtensionassociationsExtensionAssociationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute,
  deleteOcsV2PhpAppsSharingApiV1ShareIdRoute,
  deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRoute,
  getOcsV2PhpAppsSharingApiV1RecipientsRoute,
  getOcsV2PhpAppsSharingApiV1SecretRoute,
  getOcsV2PhpAppsSharingApiV1SharesRoute,
  postOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute,
  postOcsV2PhpAppsSharingApiV1ShareIdRoute,
  postOcsV2PhpAppsSharingApiV1ShareIdSourceRoute,
  postOcsV2PhpAppsSharingApiV1ShareRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdPermissionRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdPropertyRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdStateRoute,
  putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiV1Handler = app
  .openapi(getOcsV2PhpAppsSharingApiV1RecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSharingApiV1SecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSharingApiV1ShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSharingApiV1ShareIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdPropertyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSharingApiV1ShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSharingApiV1ShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSharingApiV1SharesRoute, (c) => {
    throw new Error('Not implemented')
  })

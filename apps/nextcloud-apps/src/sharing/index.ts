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
} from './routes'
import {
  deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRouteHandler,
  deleteOcsV2PhpAppsSharingApiV1ShareIdRouteHandler,
  deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRouteHandler,
  getOcsV2PhpAppsSharingApiV1RecipientsRouteHandler,
  getOcsV2PhpAppsSharingApiV1SecretRouteHandler,
  getOcsV2PhpAppsSharingApiV1SharesRouteHandler,
  postOcsV2PhpAppsSharingApiV1ShareIdRecipientRouteHandler,
  postOcsV2PhpAppsSharingApiV1ShareIdRouteHandler,
  postOcsV2PhpAppsSharingApiV1ShareIdSourceRouteHandler,
  postOcsV2PhpAppsSharingApiV1ShareRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdPermissionRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdPropertyRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdStateRouteHandler,
  putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getOcsV2PhpAppsSharingApiV1RecipientsRoute,
    getOcsV2PhpAppsSharingApiV1RecipientsRouteHandler,
  )
  .openapi(getOcsV2PhpAppsSharingApiV1SecretRoute, getOcsV2PhpAppsSharingApiV1SecretRouteHandler)
  .openapi(postOcsV2PhpAppsSharingApiV1ShareRoute, postOcsV2PhpAppsSharingApiV1ShareRouteHandler)
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdStateRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdStateRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdUserStatusRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsSharingApiV1ShareIdSourceRoute,
    postOcsV2PhpAppsSharingApiV1ShareIdSourceRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRoute,
    deleteOcsV2PhpAppsSharingApiV1ShareIdSourceRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute,
    postOcsV2PhpAppsSharingApiV1ShareIdRecipientRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRoute,
    deleteOcsV2PhpAppsSharingApiV1ShareIdRecipientRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdRecipientSecretRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdPropertyRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdPropertyRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdPermissionRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdPermissionRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdRecipientPermissionRouteHandler,
  )
  .openapi(
    putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRoute,
    putOcsV2PhpAppsSharingApiV1ShareIdPermissionPresetRouteHandler,
  )
  .openapi(
    deleteOcsV2PhpAppsSharingApiV1ShareIdRoute,
    deleteOcsV2PhpAppsSharingApiV1ShareIdRouteHandler,
  )
  .openapi(
    postOcsV2PhpAppsSharingApiV1ShareIdRoute,
    postOcsV2PhpAppsSharingApiV1ShareIdRouteHandler,
  )
  .openapi(getOcsV2PhpAppsSharingApiV1SharesRoute, getOcsV2PhpAppsSharingApiV1SharesRouteHandler)

export default app

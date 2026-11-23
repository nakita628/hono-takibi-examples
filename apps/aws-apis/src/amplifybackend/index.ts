import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBackendAppIdChallengeSessionIdRoute,
  getBackendAppIdJobBackendEnvironmentNameJobIdRoute,
  postBackendAppIdApiBackendEnvironmentNameDetailsRoute,
  postBackendAppIdApiBackendEnvironmentNameGenerateModelsRoute,
  postBackendAppIdApiBackendEnvironmentNameGetModelsRoute,
  postBackendAppIdApiBackendEnvironmentNameRemoveRoute,
  postBackendAppIdApiBackendEnvironmentNameRoute,
  postBackendAppIdApiRoute,
  postBackendAppIdAuthBackendEnvironmentNameDetailsRoute,
  postBackendAppIdAuthBackendEnvironmentNameImportRoute,
  postBackendAppIdAuthBackendEnvironmentNameRemoveRoute,
  postBackendAppIdAuthBackendEnvironmentNameRoute,
  postBackendAppIdAuthRoute,
  postBackendAppIdChallengeRoute,
  postBackendAppIdChallengeSessionIdRemoveRoute,
  postBackendAppIdConfigRemoveRoute,
  postBackendAppIdConfigRoute,
  postBackendAppIdConfigUpdateRoute,
  postBackendAppIdDetailsRoute,
  postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRoute,
  postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRoute,
  postBackendAppIdJobBackendEnvironmentNameJobIdRoute,
  postBackendAppIdJobBackendEnvironmentNameRoute,
  postBackendAppIdRemoveRoute,
  postBackendAppIdStorageBackendEnvironmentNameDetailsRoute,
  postBackendAppIdStorageBackendEnvironmentNameImportRoute,
  postBackendAppIdStorageBackendEnvironmentNameRemoveRoute,
  postBackendAppIdStorageBackendEnvironmentNameRoute,
  postBackendAppIdStorageRoute,
  postBackendRoute,
  postS3BucketsRoute,
} from './routes'
import {
  getBackendAppIdChallengeSessionIdRouteHandler,
  getBackendAppIdJobBackendEnvironmentNameJobIdRouteHandler,
  postBackendAppIdApiBackendEnvironmentNameDetailsRouteHandler,
  postBackendAppIdApiBackendEnvironmentNameGenerateModelsRouteHandler,
  postBackendAppIdApiBackendEnvironmentNameGetModelsRouteHandler,
  postBackendAppIdApiBackendEnvironmentNameRemoveRouteHandler,
  postBackendAppIdApiBackendEnvironmentNameRouteHandler,
  postBackendAppIdApiRouteHandler,
  postBackendAppIdAuthBackendEnvironmentNameDetailsRouteHandler,
  postBackendAppIdAuthBackendEnvironmentNameImportRouteHandler,
  postBackendAppIdAuthBackendEnvironmentNameRemoveRouteHandler,
  postBackendAppIdAuthBackendEnvironmentNameRouteHandler,
  postBackendAppIdAuthRouteHandler,
  postBackendAppIdChallengeRouteHandler,
  postBackendAppIdChallengeSessionIdRemoveRouteHandler,
  postBackendAppIdConfigRemoveRouteHandler,
  postBackendAppIdConfigRouteHandler,
  postBackendAppIdConfigUpdateRouteHandler,
  postBackendAppIdDetailsRouteHandler,
  postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRouteHandler,
  postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRouteHandler,
  postBackendAppIdJobBackendEnvironmentNameJobIdRouteHandler,
  postBackendAppIdJobBackendEnvironmentNameRouteHandler,
  postBackendAppIdRemoveRouteHandler,
  postBackendAppIdStorageBackendEnvironmentNameDetailsRouteHandler,
  postBackendAppIdStorageBackendEnvironmentNameImportRouteHandler,
  postBackendAppIdStorageBackendEnvironmentNameRemoveRouteHandler,
  postBackendAppIdStorageBackendEnvironmentNameRouteHandler,
  postBackendAppIdStorageRouteHandler,
  postBackendRouteHandler,
  postS3BucketsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRoute,
    postBackendAppIdEnvironmentsBackendEnvironmentNameCloneRouteHandler,
  )
  .openapi(postBackendRoute, postBackendRouteHandler)
  .openapi(postBackendAppIdApiRoute, postBackendAppIdApiRouteHandler)
  .openapi(postBackendAppIdAuthRoute, postBackendAppIdAuthRouteHandler)
  .openapi(postBackendAppIdConfigRoute, postBackendAppIdConfigRouteHandler)
  .openapi(postBackendAppIdStorageRoute, postBackendAppIdStorageRouteHandler)
  .openapi(postBackendAppIdChallengeRoute, postBackendAppIdChallengeRouteHandler)
  .openapi(
    postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRoute,
    postBackendAppIdEnvironmentsBackendEnvironmentNameRemoveRouteHandler,
  )
  .openapi(
    postBackendAppIdApiBackendEnvironmentNameRemoveRoute,
    postBackendAppIdApiBackendEnvironmentNameRemoveRouteHandler,
  )
  .openapi(
    postBackendAppIdAuthBackendEnvironmentNameRemoveRoute,
    postBackendAppIdAuthBackendEnvironmentNameRemoveRouteHandler,
  )
  .openapi(
    postBackendAppIdStorageBackendEnvironmentNameRemoveRoute,
    postBackendAppIdStorageBackendEnvironmentNameRemoveRouteHandler,
  )
  .openapi(
    postBackendAppIdChallengeSessionIdRemoveRoute,
    postBackendAppIdChallengeSessionIdRemoveRouteHandler,
  )
  .openapi(
    postBackendAppIdApiBackendEnvironmentNameGenerateModelsRoute,
    postBackendAppIdApiBackendEnvironmentNameGenerateModelsRouteHandler,
  )
  .openapi(postBackendAppIdDetailsRoute, postBackendAppIdDetailsRouteHandler)
  .openapi(
    postBackendAppIdApiBackendEnvironmentNameDetailsRoute,
    postBackendAppIdApiBackendEnvironmentNameDetailsRouteHandler,
  )
  .openapi(
    postBackendAppIdApiBackendEnvironmentNameGetModelsRoute,
    postBackendAppIdApiBackendEnvironmentNameGetModelsRouteHandler,
  )
  .openapi(
    postBackendAppIdAuthBackendEnvironmentNameDetailsRoute,
    postBackendAppIdAuthBackendEnvironmentNameDetailsRouteHandler,
  )
  .openapi(
    getBackendAppIdJobBackendEnvironmentNameJobIdRoute,
    getBackendAppIdJobBackendEnvironmentNameJobIdRouteHandler,
  )
  .openapi(
    postBackendAppIdJobBackendEnvironmentNameJobIdRoute,
    postBackendAppIdJobBackendEnvironmentNameJobIdRouteHandler,
  )
  .openapi(
    postBackendAppIdStorageBackendEnvironmentNameDetailsRoute,
    postBackendAppIdStorageBackendEnvironmentNameDetailsRouteHandler,
  )
  .openapi(getBackendAppIdChallengeSessionIdRoute, getBackendAppIdChallengeSessionIdRouteHandler)
  .openapi(
    postBackendAppIdAuthBackendEnvironmentNameImportRoute,
    postBackendAppIdAuthBackendEnvironmentNameImportRouteHandler,
  )
  .openapi(
    postBackendAppIdStorageBackendEnvironmentNameImportRoute,
    postBackendAppIdStorageBackendEnvironmentNameImportRouteHandler,
  )
  .openapi(
    postBackendAppIdJobBackendEnvironmentNameRoute,
    postBackendAppIdJobBackendEnvironmentNameRouteHandler,
  )
  .openapi(postS3BucketsRoute, postS3BucketsRouteHandler)
  .openapi(postBackendAppIdRemoveRoute, postBackendAppIdRemoveRouteHandler)
  .openapi(postBackendAppIdConfigRemoveRoute, postBackendAppIdConfigRemoveRouteHandler)
  .openapi(
    postBackendAppIdApiBackendEnvironmentNameRoute,
    postBackendAppIdApiBackendEnvironmentNameRouteHandler,
  )
  .openapi(
    postBackendAppIdAuthBackendEnvironmentNameRoute,
    postBackendAppIdAuthBackendEnvironmentNameRouteHandler,
  )
  .openapi(postBackendAppIdConfigUpdateRoute, postBackendAppIdConfigUpdateRouteHandler)
  .openapi(
    postBackendAppIdStorageBackendEnvironmentNameRoute,
    postBackendAppIdStorageBackendEnvironmentNameRouteHandler,
  )

export default app

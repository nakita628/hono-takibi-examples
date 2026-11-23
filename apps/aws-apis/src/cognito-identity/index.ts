import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsCognitoIdentityServiceCreateIdentityPoolHandler,
  xAmzTargetAwsCognitoIdentityServiceDeleteIdentitiesHandler,
  xAmzTargetAwsCognitoIdentityServiceDeleteIdentityPoolHandler,
  xAmzTargetAwsCognitoIdentityServiceDescribeIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceDescribeIdentityPoolHandler,
  xAmzTargetAwsCognitoIdentityServiceGetCredentialsForIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceGetIdentityPoolRolesHandler,
  xAmzTargetAwsCognitoIdentityServiceGetIdHandler,
  xAmzTargetAwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceGetOpenIdTokenHandler,
  xAmzTargetAwsCognitoIdentityServiceGetPrincipalTagAttributeMapHandler,
  xAmzTargetAwsCognitoIdentityServiceListIdentitiesHandler,
  xAmzTargetAwsCognitoIdentityServiceListIdentityPoolsHandler,
  xAmzTargetAwsCognitoIdentityServiceListTagsForResourceHandler,
  xAmzTargetAwsCognitoIdentityServiceLookupDeveloperIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceMergeDeveloperIdentitiesHandler,
  xAmzTargetAwsCognitoIdentityServiceSetIdentityPoolRolesHandler,
  xAmzTargetAwsCognitoIdentityServiceSetPrincipalTagAttributeMapHandler,
  xAmzTargetAwsCognitoIdentityServiceTagResourceHandler,
  xAmzTargetAwsCognitoIdentityServiceUnlinkDeveloperIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceUnlinkIdentityHandler,
  xAmzTargetAwsCognitoIdentityServiceUntagResourceHandler,
  xAmzTargetAwsCognitoIdentityServiceUpdateIdentityPoolHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsCognitoIdentityServiceCreateIdentityPoolHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceDeleteIdentitiesHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceDeleteIdentityPoolHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceDescribeIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceDescribeIdentityPoolHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetCredentialsForIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetIdHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetIdentityPoolRolesHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetOpenIdTokenHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceGetPrincipalTagAttributeMapHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceListIdentitiesHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceListIdentityPoolsHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceListTagsForResourceHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceLookupDeveloperIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceMergeDeveloperIdentitiesHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceSetIdentityPoolRolesHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceSetPrincipalTagAttributeMapHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceTagResourceHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceUnlinkDeveloperIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceUnlinkIdentityHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceUntagResourceHandler)
  .route('/', xAmzTargetAwsCognitoIdentityServiceUpdateIdentityPoolHandler)

export default app

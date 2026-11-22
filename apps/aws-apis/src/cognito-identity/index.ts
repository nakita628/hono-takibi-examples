import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolHandler,
  XAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesHandler,
  XAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolHandler,
  XAmzTargetAWSCognitoIdentityServiceDescribeIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolHandler,
  XAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesHandler,
  XAmzTargetAWSCognitoIdentityServiceGetIdHandler,
  XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenHandler,
  XAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapHandler,
  XAmzTargetAWSCognitoIdentityServiceListIdentitiesHandler,
  XAmzTargetAWSCognitoIdentityServiceListIdentityPoolsHandler,
  XAmzTargetAWSCognitoIdentityServiceListTagsForResourceHandler,
  XAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesHandler,
  XAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesHandler,
  XAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapHandler,
  XAmzTargetAWSCognitoIdentityServiceTagResourceHandler,
  XAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceUnlinkIdentityHandler,
  XAmzTargetAWSCognitoIdentityServiceUntagResourceHandler,
  XAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceDescribeIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetIdHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceListIdentitiesHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceListIdentityPoolsHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceListTagsForResourceHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceTagResourceHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceUnlinkIdentityHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceUntagResourceHandler)
  .route('/', XAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolHandler)

export default app

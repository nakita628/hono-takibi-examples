type StatusOK = 'OK'
type InvalidJSON = string
type RequestUnauthorised = 'Invalid API key'
type NotFound = 'Not Found'
type InternalError = 'Internal Error'
type UserId = string
type TenantId = string
type TimeJoined = number
type Email = string
type PhoneNumber = string
type ThirdPartyId = string
type ThirdPartyUserId = string
type RecipeId = 'emailpassword' | 'passwordless' | 'thirdparty'
type AuthRecipeUser = {
  id?: UserId | undefined
  isPrimaryUser?: boolean | undefined
  tenantIds?: TenantId[] | undefined
  timeJoined?: TimeJoined | undefined
  emails?: Email[] | undefined
  phoneNumbers?: PhoneNumber[] | undefined
  thirdParty?:
    | { id?: ThirdPartyId | undefined; userId?: ThirdPartyUserId | undefined }[]
    | undefined
  loginMethods?:
    | {
        tenantIds?: TenantId[] | undefined
        recipeUserId?: UserId | undefined
        verified?: boolean | undefined
        timeJoined?: TimeJoined | undefined
        recipeId?: RecipeId | undefined
        email?: Email | undefined
        phoneNumber?: PhoneNumber | undefined
        thirdParty?:
          | { id?: ThirdPartyId | undefined; userId?: ThirdPartyUserId | undefined }
          | undefined
      }[]
    | undefined
}
type LicenseError = 'License Error'
type PreAuthSessionId = string
type LinkCode = string
type DeviceId = string
type UserInputCode = string
type CodeId = string
type TimeCreated = number
type CodeLifetime = number
type Password = string
type WrongCredentialsResponse = { status?: 'WRONG_CREDENTIALS_ERROR' | undefined }
type Token = string
type UnknownUserIdResponse = { status?: 'UNKNOWN_USER_ID_ERROR' | undefined }
type IsVerified = boolean
type ThirdPartyEmail = { id?: Email | undefined; isVerified?: IsVerified | undefined }
type EmailVerificationVerifyTokenRequest = {
  userId?: UserId | undefined
  email?: Email | undefined
}
type UserMetadata = { [x: string]: unknown }
type UserMetadataUpdate = { [x: string]: unknown }
type Role = string
type UnknownRoleResponse = { status?: 'UNKNOWN_ROLE_ERROR' | undefined }
type UserDataInJWT = { [x: string]: unknown }
type UserDataInDatabase = { [x: string]: unknown }
type EnableAntiCsrf = boolean
type Handle = string
type Session = {
  handle?: Handle | undefined
  userId?: UserId | undefined
  userDataInJWT?: UserDataInJWT | undefined
  tenantId?: TenantId | undefined
  recipeUserId?: UserId | undefined
}
type Expiry = number
type CookieInfo = {
  token?: Token | undefined
  expiry?: Expiry | undefined
  createdTime?: TimeCreated | undefined
}
type UnauthorisedResponse = 'UNAUTHORISED'
type Message = string
type UnauthorisedMessageResponse = {
  status?: UnauthorisedResponse | undefined
  message?: Message | undefined
}
type SessionHandles = Handle[]
type TryRefreshTokenResponse = 'TRY_REFRESH_TOKEN'
type TokenTheftResponse = 'TOKEN_THEFT_DETECTED'
type StatusOKResponse = { status?: 'OK' | undefined }
type CreateJWTPayload = { [x: string]: unknown }
type CreateJWTAlgorithm = 'RS256'
type JwksDomain = string
type JwtValidity = number
type Jwk = {
  alg?: CreateJWTAlgorithm | undefined
  kty?: string | undefined
  use?: string | undefined
  kid?: string | undefined
  x5c?: string[] | undefined
}
type HelloResponse = 'Hello'
type PaginationToken = string
type FirstFactors = string[]
type RequiredSecondaryFactors = string[]
type ThirdPartyProviderConfig = {
  thirdPartyId: string
  name?: string | undefined
  clients?:
    | {
        clientType?: string | undefined
        clientId?: string | undefined
        clientSecret?: string | undefined
        scope?: string[] | undefined
        forcePKCE?: boolean | undefined
        additionalConfig?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  authorizationEndpoint?: string | undefined
  authorizationEndpointQueryParams?: { [x: string]: unknown } | undefined
  tokenEndpoint?: string | undefined
  tokenEndpointBodyParams?: { [x: string]: unknown } | undefined
  userInfoEndpoint?: string | undefined
  userInfoEndpointQueryParams?: { [x: string]: unknown } | undefined
  userInfoEndpointHeaders?: { [x: string]: unknown } | undefined
  jwksURI?: string | undefined
  oidcDiscoveryEndpoint?: string | undefined
  requireEmail?: boolean | undefined
  userInfoMap?:
    | {
        fromIdTokenPayload?:
          | {
              userId?: string | undefined
              email?: string | undefined
              emailVerified?: string | undefined
            }
          | undefined
        fromUserInfoAPI?:
          | {
              userId?: string | undefined
              email?: string | undefined
              emailVerified?: string | undefined
            }
          | undefined
      }
    | undefined
}
type TenantConfig = {
  tenantId: TenantId
  emailPassword: { enabled: boolean }
  thirdParty: { enabled: boolean; providers?: ThirdPartyProviderConfig[] | undefined }
  passwordless: { enabled: boolean }
  firstFactors?: FirstFactors | undefined
  requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
  coreConfig: { [x: string]: unknown }
}
type TenantConfigV2 = {
  tenantId: TenantId
  thirdParty: { providers?: ThirdPartyProviderConfig[] | undefined }
  firstFactors?: FirstFactors | undefined
  requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
  coreConfig: { [x: string]: unknown }
}
type OauthError = {
  status: 'OAUTH_ERROR'
  error: string
  errorDescription: string
  statusCode: number
}
type OauthClient = {
  clientId?: string | undefined
  clientName?: string | undefined
  clientSecret?: string | undefined
  redirectUris?: string[] | undefined
  grantTypes?: string[] | undefined
  responseTypes?: string[] | undefined
  scope?: string | undefined
  audience?: string[] | undefined
  policyUri?: string | undefined
  allowedCorsOrigins?: string[] | undefined
  tosUri?: string | undefined
  clientUri?: string | undefined
  logoUri?: string | undefined
  tokenEndpointAuthMethod?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  postLogoutRedirectUris?: string[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  authorizationCodeGrantAccessTokenLifespan?: (string | null) | undefined
  authorizationCodeGrantIdTokenLifespan?: (string | null) | undefined
  authorizationCodeGrantRefreshTokenLifespan?: (string | null) | undefined
  clientCredentialsGrantAccessTokenLifespan?: (string | null) | undefined
  implicitGrantAccessTokenLifespan?: (string | null) | undefined
  implicitGrantIdTokenLifespan?: (string | null) | undefined
  refreshTokenGrantIdTokenLifespan?: (string | null) | undefined
  refreshTokenGrantAccessTokenLifespan?: (string | null) | undefined
  refreshTokenGrantRefreshTokenLifespan?: (string | null) | undefined
  enableRefreshTokenRotation?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/appid-<appId>/recipe/accountlinking/user/primary/check': {
      $get:
        | {
            input: { query: { recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; wasAlreadyAPrimaryUser?: boolean | undefined }
              | {
                  status?:
                    | 'ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
              | {
                  status?: 'RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR' | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/accountlinking/user/link/check': {
      $get:
        | {
            input: { query: { primaryUserId: string; recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; accountsAlreadyLinked?: boolean | undefined }
              | {
                  status?:
                    | 'ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
              | {
                  status?:
                    | 'RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
              | { status?: 'INPUT_USER_IS_NOT_A_PRIMARY_USER' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { primaryUserId: string; recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { primaryUserId: string; recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { primaryUserId: string; recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { primaryUserId: string; recipeUserId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/accountlinking/user/primary': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output:
              | {
                  status?: StatusOK | undefined
                  wasAlreadyAPrimaryUser?: boolean | undefined
                  user?: AuthRecipeUser | undefined
                }
              | {
                  status?:
                    | 'ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
              | {
                  status?: 'RECIPE_USER_ID_ALREADY_LINKED_WITH_PRIMARY_USER_ID_ERROR' | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/accountlinking/user/link': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output:
              | {
                  status?: StatusOK | undefined
                  accountsAlreadyLinked?: boolean | undefined
                  user?: AuthRecipeUser | undefined
                }
              | {
                  status?:
                    | 'ACCOUNT_INFO_ALREADY_ASSOCIATED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  description?: string | undefined
                }
              | {
                  status?:
                    | 'RECIPE_USER_ID_ALREADY_LINKED_WITH_ANOTHER_PRIMARY_USER_ID_ERROR'
                    | undefined
                  primaryUserId?: string | undefined
                  user?: AuthRecipeUser | undefined
                  description?: string | undefined
                }
              | { status?: 'INPUT_USER_IS_NOT_A_PRIMARY_USER' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { primaryUserId: string; recipeUserId: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/accountlinking/user/unlink': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: {
              status?: StatusOK | undefined
              wasRecipeUserDeleted?: boolean | undefined
              wasLinked?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/totp/device': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  secret?: string | undefined
                  deviceName?: string | undefined
                }
              | { status?: 'DEVICE_ALREADY_EXISTS_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; existingDeviceName: string; newDeviceName: string } }
            output:
              | { status?: StatusOK | undefined }
              | { status?: 'UNKNOWN_DEVICE_ERROR' | undefined }
              | { status?: 'DEVICE_ALREADY_EXISTS_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; existingDeviceName: string; newDeviceName: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; existingDeviceName: string; newDeviceName: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; existingDeviceName: string; newDeviceName: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; existingDeviceName: string; newDeviceName: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/totp/device/list': {
      $get:
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              devices?:
                | {
                    name?: string | undefined
                    period?: number | undefined
                    skew?: number | undefined
                    verified?: boolean | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/totp/device/import': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
                secretKey: string
              }
            }
            output:
              | { status?: StatusOK | undefined; deviceName?: string | undefined }
              | { status?: 'DEVICE_ALREADY_EXISTS_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
                secretKey: string
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
                secretKey: string
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
                secretKey: string
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                deviceName?: string | undefined
                skew: number
                period: number
                secretKey: string
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/totp/device/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string } }
            output: { status?: StatusOK | undefined; didDeviceExist?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/totp/verify': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; totp: string; allowUnverifiedDevices: boolean } }
            output:
              | { status?: StatusOK | undefined }
              | {
                  status?: 'INVALID_TOTP_ERROR' | undefined
                  currentNumberOfFailedAttempts?: number | undefined
                  maxNumberOfFailedAttempts?: number | undefined
                }
              | { status?: 'UNKNOWN_USER_ID_ERROR' | undefined }
              | {
                  status?: 'LIMIT_REACHED_ERROR' | undefined
                  retryAfterMs?: number | undefined
                  currentNumberOfFailedAttempts?: number | undefined
                  maxNumberOfFailedAttempts?: number | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; totp: string; allowUnverifiedDevices: boolean } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; totp: string; allowUnverifiedDevices: boolean } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; totp: string; allowUnverifiedDevices: boolean } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; totp: string; allowUnverifiedDevices: boolean } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/totp/device/verify': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string; totp: string } }
            output:
              | { status?: StatusOK | undefined; wasAlreadyVerified?: boolean | undefined }
              | { status?: 'UNKNOWN_DEVICE_ERROR' | undefined }
              | {
                  status?: 'INVALID_TOTP_ERROR' | undefined
                  currentNumberOfFailedAttempts?: number | undefined
                  maxNumberOfFailedAttempts?: number | undefined
                }
              | {
                  status?: 'LIMIT_REACHED_ERROR' | undefined
                  retryAfterMs?: number | undefined
                  currentNumberOfFailedAttempts?: number | undefined
                  maxNumberOfFailedAttempts?: number | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string; totp: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string; totp: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string; totp: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; deviceName: string; totp: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/userid/map': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                superTokensUserId: UserId
                externalUserId: string
                externalUserIdInfo?: string | undefined
                force?: boolean | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined }
              | { status?: 'UNKNOWN_SUPERTOKENS_USER_ID_ERROR' | undefined }
              | {
                  status?: 'USER_ID_MAPPING_ALREADY_EXISTS_ERROR' | undefined
                  doesSuperTokensUserIdExist?: boolean | undefined
                  doesExternalUserIdExist?: boolean | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                superTokensUserId: UserId
                externalUserId: string
                externalUserIdInfo?: string | undefined
                force?: boolean | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                superTokensUserId: UserId
                externalUserId: string
                externalUserIdInfo?: string | undefined
                force?: boolean | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                superTokensUserId: UserId
                externalUserId: string
                externalUserIdInfo?: string | undefined
                force?: boolean | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                superTokensUserId: UserId
                externalUserId: string
                externalUserIdInfo?: string | undefined
                force?: boolean | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: {
              query: { userId: string; userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status: StatusOK
                  superTokensUserId: UserId
                  externalUserId: string
                  externalUserIdInfo?: string | undefined
                }
              | { status?: 'UNKNOWN_MAPPING_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { userId: string; userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: { userId: string; userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: { userId: string; userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { userId: string; userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/userid/map/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                force?: boolean | undefined
              }
            }
            output: { status?: StatusOK | undefined; didMappingExist?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                force?: boolean | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                force?: boolean | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                force?: boolean | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                force?: boolean | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/userid/external-user-id-info': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                externalUserIdInfo: string | null
              }
            }
            output:
              | { status?: StatusOK | undefined }
              | { status?: 'UNKNOWN_MAPPING_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                externalUserIdInfo: string | null
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                externalUserIdInfo: string | null
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                externalUserIdInfo: string | null
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId: UserId
                userIdType?: 'SUPERTOKENS' | 'EXTERNAL' | 'ANY' | undefined
                externalUserIdInfo: string | null
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/code/check': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  consumedDevice?:
                    | {
                        preAuthSessionId: PreAuthSessionId
                        failedCodeInputAttemptCount: number
                        email?: Email | undefined
                        phoneNumber?: PhoneNumber | undefined
                      }
                    | undefined
                }
              | {
                  status?:
                    | 'INCORRECT_USER_INPUT_CODE_ERROR'
                    | 'EXPIRED_USER_INPUT_CODE_ERROR'
                    | undefined
                  failedCodeInputAttemptCount?: number | undefined
                  maximumCodeInputAttempts?: number | undefined
                }
              | { status?: 'RESTART_FLOW_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/code/consume': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  createdNewUser?: boolean | undefined
                  user?: AuthRecipeUser | undefined
                  recipeUserId?: UserId | undefined
                  consumedDevice?:
                    | {
                        preAuthSessionId: PreAuthSessionId
                        failedCodeInputAttemptCount: number
                        email?: Email | undefined
                        phoneNumber?: PhoneNumber | undefined
                      }
                    | undefined
                }
              | {
                  status?:
                    | 'INCORRECT_USER_INPUT_CODE_ERROR'
                    | 'EXPIRED_USER_INPUT_CODE_ERROR'
                    | undefined
                  failedCodeInputAttemptCount?: number | undefined
                  maximumCodeInputAttempts?: number | undefined
                }
              | { status?: 'RESTART_FLOW_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { preAuthSessionId: PreAuthSessionId; linkCode: LinkCode }
                | {
                    preAuthSessionId: PreAuthSessionId
                    deviceId: DeviceId
                    userInputCode: UserInputCode
                  }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/code': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { email: Email; userInputCode?: UserInputCode | undefined }
                | { phoneNumber: PhoneNumber; userInputCode?: UserInputCode | undefined }
                | { deviceId: DeviceId; userInputCode?: UserInputCode | undefined }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  preAuthSessionId?: PreAuthSessionId | undefined
                  codeId?: CodeId | undefined
                  deviceId?: DeviceId | undefined
                  userInputCode?: UserInputCode | undefined
                  linkCode?: LinkCode | undefined
                  timeCreated?: TimeCreated | undefined
                  codeLifetime?: CodeLifetime | undefined
                }
              | { status?: 'RESTART_FLOW_ERROR' | 'USER_INPUT_CODE_ALREADY_USED_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { email: Email; userInputCode?: UserInputCode | undefined }
                | { phoneNumber: PhoneNumber; userInputCode?: UserInputCode | undefined }
                | { deviceId: DeviceId; userInputCode?: UserInputCode | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { email: Email; userInputCode?: UserInputCode | undefined }
                | { phoneNumber: PhoneNumber; userInputCode?: UserInputCode | undefined }
                | { deviceId: DeviceId; userInputCode?: UserInputCode | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { email: Email; userInputCode?: UserInputCode | undefined }
                | { phoneNumber: PhoneNumber; userInputCode?: UserInputCode | undefined }
                | { deviceId: DeviceId; userInputCode?: UserInputCode | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { email: Email; userInputCode?: UserInputCode | undefined }
                | { phoneNumber: PhoneNumber; userInputCode?: UserInputCode | undefined }
                | { deviceId: DeviceId; userInputCode?: UserInputCode | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/code/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { codeId: CodeId } | { preAuthSessionId: PreAuthSessionId } }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { codeId: CodeId } | { preAuthSessionId: PreAuthSessionId } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { codeId: CodeId } | { preAuthSessionId: PreAuthSessionId } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { codeId: CodeId } | { preAuthSessionId: PreAuthSessionId } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { codeId: CodeId } | { preAuthSessionId: PreAuthSessionId } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/codes': {
      $get:
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                deviceId?: DeviceId | undefined
                preAuthSessionId?: PreAuthSessionId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status?: StatusOK | undefined
              devices?:
                | {
                    preAuthSessionId?: PreAuthSessionId | undefined
                    failedCodeInputAttemptCount?: number | undefined
                    email?: Email | undefined
                    phoneNumber?: PhoneNumber | undefined
                    codes?:
                      | {
                          codeId?: CodeId | undefined
                          timeCreated?: TimeCreated | undefined
                          codeLifetime?: CodeLifetime | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                deviceId?: DeviceId | undefined
                preAuthSessionId?: PreAuthSessionId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                deviceId?: DeviceId | undefined
                preAuthSessionId?: PreAuthSessionId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                deviceId?: DeviceId | undefined
                preAuthSessionId?: PreAuthSessionId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: PhoneNumber | undefined
                deviceId?: DeviceId | undefined
                preAuthSessionId?: PreAuthSessionId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup/codes/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email: Email } | { phoneNumber: PhoneNumber } }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email: Email } | { phoneNumber: PhoneNumber } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email: Email } | { phoneNumber: PhoneNumber } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email: Email } | { phoneNumber: PhoneNumber } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email: Email } | { phoneNumber: PhoneNumber } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user⠀⠀': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                email?: Email | undefined
                phoneNumber?: PhoneNumber | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; user?: AuthRecipeUser | undefined }
              | {
                  status?:
                    | 'UNKNOWN_USER_ID_ERROR'
                    | 'UNKNOWN_EMAIL_ERROR'
                    | 'UNKNOWN_PHONE_NUMBER_ERROR'
                    | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                email?: Email | undefined
                phoneNumber?: PhoneNumber | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                email?: Email | undefined
                phoneNumber?: PhoneNumber | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                email?: Email | undefined
                phoneNumber?: PhoneNumber | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                email?: Email | undefined
                phoneNumber?: PhoneNumber | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: {} | undefined
                phoneNumber?: {} | undefined
              }
            }
            output:
              | {
                  status?:
                    | 'OK'
                    | 'UNKNOWN_USER_ID_ERROR'
                    | 'EMAIL_ALREADY_EXISTS_ERROR'
                    | 'PHONE_NUMBER_ALREADY_EXISTS_ERROR'
                    | undefined
                }
              | {
                  status?:
                    | 'EMAIL_CHANGE_NOT_ALLOWED_ERROR'
                    | 'PHONE_NUMBER_CHANGE_NOT_ALLOWED_ERROR'
                    | undefined
                  reason?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: {} | undefined
                phoneNumber?: {} | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: {} | undefined
                phoneNumber?: {} | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: {} | undefined
                phoneNumber?: {} | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: {} | undefined
                phoneNumber?: {} | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signin': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output:
              | {
                  status?: StatusOK | undefined
                  user?: AuthRecipeUser | undefined
                  recipeUserId?: UserId | undefined
                }
              | WrongCredentialsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signup': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output:
              | {
                  status?: StatusOK | undefined
                  user?: AuthRecipeUser | undefined
                  recipeUserId?: UserId | undefined
                }
              | { status?: 'EMAIL_ALREADY_EXISTS_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: Email | undefined; password?: Password | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user': {
      $get:
        | {
            input: { query: { email?: Email | undefined; userId?: UserId | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; user?: AuthRecipeUser | undefined }
              | { status?: 'UNKNOWN_USER_ID_ERROR' | 'UNKNOWN_EMAIL_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email?: Email | undefined; userId?: UserId | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { email?: Email | undefined; userId?: UserId | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { email?: Email | undefined; userId?: UserId | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { email?: Email | undefined; userId?: UserId | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: Email | undefined
                password?: Password | undefined
              }
            }
            output:
              | {
                  status?: 'OK' | 'UNKNOWN_USER_ID_ERROR' | 'EMAIL_ALREADY_EXISTS_ERROR' | undefined
                }
              | {
                  status?: 'EMAIL_CHANGE_NOT_ALLOWED_ERROR' | undefined
                  reason?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: Email | undefined
                password?: Password | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: Email | undefined
                password?: Password | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: Email | undefined
                password?: Password | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                recipeUserId?: UserId | undefined
                email?: Email | undefined
                password?: Password | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; email: Email } }
            output:
              | { status?: StatusOK | undefined; token?: Token | undefined }
              | UnknownUserIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; email: Email } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; email: Email } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; email: Email } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; email: Email } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/password/reset': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                method?: 'token' | undefined
                token?: Token | undefined
                newPassword?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; userId?: UserId | undefined }
              | { status?: 'RESET_PASSWORD_INVALID_TOKEN_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                method?: 'token' | undefined
                token?: Token | undefined
                newPassword?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                method?: 'token' | undefined
                token?: Token | undefined
                newPassword?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                method?: 'token' | undefined
                token?: Token | undefined
                newPassword?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                method?: 'token' | undefined
                token?: Token | undefined
                newPassword?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/passwordhash/import': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                email?: Email | undefined
                passwordHash?: string | undefined
                hashingAlgorithm?: 'argon2' | 'bcrypt' | 'firebase_scrypt' | undefined
              }
            }
            output: {
              status?: StatusOK | undefined
              user?: AuthRecipeUser | undefined
              didUserAlreadyExist?: boolean | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                email?: Email | undefined
                passwordHash?: string | undefined
                hashingAlgorithm?: 'argon2' | 'bcrypt' | 'firebase_scrypt' | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                email?: Email | undefined
                passwordHash?: string | undefined
                hashingAlgorithm?: 'argon2' | 'bcrypt' | 'firebase_scrypt' | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                email?: Email | undefined
                passwordHash?: string | undefined
                hashingAlgorithm?: 'argon2' | 'bcrypt' | 'firebase_scrypt' | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                email?: Email | undefined
                passwordHash?: string | undefined
                hashingAlgorithm?: 'argon2' | 'bcrypt' | 'firebase_scrypt' | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/password/reset/token/consume': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: Token | undefined } }
            output:
              | {
                  status?: StatusOK | undefined
                  userId?: UserId | undefined
                  email?: Email | undefined
                }
              | { status?: 'RESET_PASSWORD_INVALID_TOKEN_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: Token | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: Token | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: Token | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: Token | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/signinup': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
                email?: ThirdPartyEmail | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  createdNewUser?: boolean | undefined
                  user?: AuthRecipeUser | undefined
                  recipeUserId?: UserId | undefined
                }
              | {
                  status?: 'EMAIL_CHANGE_NOT_ALLOWED_ERROR' | undefined
                  reason?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
                email?: ThirdPartyEmail | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
                email?: ThirdPartyEmail | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
                email?: ThirdPartyEmail | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
                email?: ThirdPartyEmail | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user⠀': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; user?: AuthRecipeUser | undefined }
              | { status?: 'UNKNOWN_USER_ID_ERROR' | 'UNKNOWN_THIRD_PARTY_USER_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                thirdPartyId?: ThirdPartyId | undefined
                thirdPartyUserId?: ThirdPartyUserId | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/users/by-email': {
      $get:
        | {
            input: { query: { email: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; users?: AuthRecipeUser[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { email: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { email: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output:
              | { status?: StatusOK | undefined; token?: Token | undefined }
              | { status?: 'EMAIL_ALREADY_VERIFIED_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/email/verify/token/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: { status?: 'OK' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/email/verify': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { method?: 'token' | undefined; token?: Token | undefined } }
            output:
              | {
                  status?: StatusOK | undefined
                  userId?: UserId | undefined
                  email?: Email | undefined
                }
              | { status?: 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { method?: 'token' | undefined; token?: Token | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { method?: 'token' | undefined; token?: Token | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { method?: 'token' | undefined; token?: Token | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { method?: 'token' | undefined; token?: Token | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/user/email/verify': {
      $get:
        | {
            input: { query: { userId?: string | undefined; email?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; isVerified?: IsVerified | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined; email?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined; email?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId?: string | undefined; email?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined; email?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/user/email/verify/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: { status?: 'OK' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: EmailVerificationVerifyTokenRequest }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/user/metadata': {
      $get:
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; metadata?: UserMetadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { userId?: UserId | undefined; metadataUpdate?: UserMetadataUpdate | undefined }
            }
            output: { status?: StatusOK | undefined; metadata?: UserMetadata | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { userId?: UserId | undefined; metadataUpdate?: UserMetadataUpdate | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { userId?: UserId | undefined; metadataUpdate?: UserMetadataUpdate | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { userId?: UserId | undefined; metadataUpdate?: UserMetadataUpdate | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { userId?: UserId | undefined; metadataUpdate?: UserMetadataUpdate | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/user/metadata/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId?: UserId | undefined } }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId?: UserId | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId?: UserId | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId?: UserId | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId?: UserId | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/role': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output:
              | { status?: StatusOK | undefined; didUserAlreadyHaveRole?: boolean | undefined }
              | UnknownRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/role/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output:
              | { status?: StatusOK | undefined; didUserHaveRole?: boolean | undefined }
              | UnknownRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { userId: UserId; role: Role } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/user/roles': {
      $get:
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; roles?: Role[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/role/users': {
      $get:
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; users?: UserId[] | undefined }
              | UnknownRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/role': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: { status?: StatusOK | undefined; createdNewRole?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/role/permissions': {
      $get:
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; permissions?: string[] | undefined }
              | UnknownRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { role: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/role/permissions/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: { status?: StatusOK | undefined } | UnknownRoleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role; permissions?: string[] | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/permission/roles': {
      $get:
        | {
            input: { query: { permission: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; roles?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { permission: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { permission: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { permission: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { permission: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/role/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role } }
            output: { status?: StatusOK | undefined; didRoleExist?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { role: Role } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/roles': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; roles?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/session': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId?: UserId | undefined
                userDataInJWT?: UserDataInJWT | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                useDynamicSigningKey?: boolean | undefined
              }
            }
            output: {
              status?: StatusOK | undefined
              session?: Session | undefined
              accessToken?: CookieInfo | undefined
              refreshToken?: CookieInfo | undefined
              antiCsrfToken?: Token | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId?: UserId | undefined
                userDataInJWT?: UserDataInJWT | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                useDynamicSigningKey?: boolean | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId?: UserId | undefined
                userDataInJWT?: UserDataInJWT | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                useDynamicSigningKey?: boolean | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId?: UserId | undefined
                userDataInJWT?: UserDataInJWT | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                useDynamicSigningKey?: boolean | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                userId?: UserId | undefined
                userDataInJWT?: UserDataInJWT | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                useDynamicSigningKey?: boolean | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/session': {
      $get:
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  userDataInDatabase?: UserDataInDatabase | undefined
                  userDataInJWT?: UserDataInJWT | undefined
                  userId?: UserId | undefined
                  expiry?: Expiry | undefined
                  timeCreated?: TimeCreated | undefined
                  sessionHandle?: Handle | undefined
                  tenantId?: TenantId | undefined
                }
              | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/session/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { sessionHandles?: SessionHandles | undefined }
                | { userId: UserId; revokeAcrossAllTenants?: boolean | undefined }
            }
            output: {
              status?: StatusOK | undefined
              sessionHandlesRevoked?: SessionHandles | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { sessionHandles?: SessionHandles | undefined }
                | { userId: UserId; revokeAcrossAllTenants?: boolean | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { sessionHandles?: SessionHandles | undefined }
                | { userId: UserId; revokeAcrossAllTenants?: boolean | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { sessionHandles?: SessionHandles | undefined }
                | { userId: UserId; revokeAcrossAllTenants?: boolean | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | { sessionHandles?: SessionHandles | undefined }
                | { userId: UserId; revokeAcrossAllTenants?: boolean | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/session/verify': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                accessToken?: Token | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                doAntiCsrfCheck?: boolean | undefined
                checkDatabase?: boolean | undefined
                antiCsrfToken?: Token | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  session?: Session | undefined
                  accessToken?: CookieInfo | undefined
                }
              | UnauthorisedMessageResponse
              | { status?: TryRefreshTokenResponse | undefined; message?: Message | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                accessToken?: Token | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                doAntiCsrfCheck?: boolean | undefined
                checkDatabase?: boolean | undefined
                antiCsrfToken?: Token | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                accessToken?: Token | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                doAntiCsrfCheck?: boolean | undefined
                checkDatabase?: boolean | undefined
                antiCsrfToken?: Token | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                accessToken?: Token | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                doAntiCsrfCheck?: boolean | undefined
                checkDatabase?: boolean | undefined
                antiCsrfToken?: Token | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                accessToken?: Token | undefined
                enableAntiCsrf?: EnableAntiCsrf | undefined
                doAntiCsrfCheck?: boolean | undefined
                checkDatabase?: boolean | undefined
                antiCsrfToken?: Token | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/session/refresh': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                refreshToken: Token
                enableAntiCsrf: EnableAntiCsrf
                antiCsrfToken?: Token | undefined
                useDynamicSigningKey: boolean
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  session?: Session | undefined
                  accessToken?: CookieInfo | undefined
                  refreshToken?: CookieInfo | undefined
                  antiCsrfToken?: Token | undefined
                }
              | {
                  status?: TokenTheftResponse | undefined
                  session?: { handle?: Handle | undefined; userId?: UserId | undefined } | undefined
                }
              | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                refreshToken: Token
                enableAntiCsrf: EnableAntiCsrf
                antiCsrfToken?: Token | undefined
                useDynamicSigningKey: boolean
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                refreshToken: Token
                enableAntiCsrf: EnableAntiCsrf
                antiCsrfToken?: Token | undefined
                useDynamicSigningKey: boolean
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                refreshToken: Token
                enableAntiCsrf: EnableAntiCsrf
                antiCsrfToken?: Token | undefined
                useDynamicSigningKey: boolean
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                refreshToken: Token
                enableAntiCsrf: EnableAntiCsrf
                antiCsrfToken?: Token | undefined
                useDynamicSigningKey: boolean
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/session/user': {
      $get:
        | {
            input: {
              query: {
                userId?: string | undefined
                fetchAcrossAllTenants?: 'true' | 'false' | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; sessionHandles?: SessionHandles | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                fetchAcrossAllTenants?: 'true' | 'false' | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                fetchAcrossAllTenants?: 'true' | 'false' | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                fetchAcrossAllTenants?: 'true' | 'false' | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                userId?: string | undefined
                fetchAcrossAllTenants?: 'true' | 'false' | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/session/regenerate': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { accessToken?: Token | undefined; userDataInJWT?: UserDataInJWT | undefined }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  session?: Session | undefined
                  accessToken?: CookieInfo | undefined
                }
              | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { accessToken?: Token | undefined; userDataInJWT?: UserDataInJWT | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { accessToken?: Token | undefined; userDataInJWT?: UserDataInJWT | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { accessToken?: Token | undefined; userDataInJWT?: UserDataInJWT | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: { accessToken?: Token | undefined; userDataInJWT?: UserDataInJWT | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/session/data': {
      $get:
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  userDataInDatabase?: UserDataInDatabase | undefined
                }
              | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
              }
            }
            output: StatusOKResponse | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInDatabase?: UserDataInDatabase | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/jwt': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                payload?: CreateJWTPayload | undefined
                algorithm?: CreateJWTAlgorithm | undefined
                jwksDomain?: JwksDomain | undefined
                validity?: JwtValidity | undefined
                useStaticSigningKey?: boolean | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; jwt?: string | undefined }
              | { status?: 'UNSUPPORTED_ALGORITHM_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                payload?: CreateJWTPayload | undefined
                algorithm?: CreateJWTAlgorithm | undefined
                jwksDomain?: JwksDomain | undefined
                validity?: JwtValidity | undefined
                useStaticSigningKey?: boolean | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                payload?: CreateJWTPayload | undefined
                algorithm?: CreateJWTAlgorithm | undefined
                jwksDomain?: JwksDomain | undefined
                validity?: JwtValidity | undefined
                useStaticSigningKey?: boolean | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                payload?: CreateJWTPayload | undefined
                algorithm?: CreateJWTAlgorithm | undefined
                jwksDomain?: JwksDomain | undefined
                validity?: JwtValidity | undefined
                useStaticSigningKey?: boolean | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/jwt/jwks': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: 'OK' | undefined; keys?: Jwk[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/.well-known/jwks.json': {
      $get:
        | { input: {}; output: { keys?: Jwk[] | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidJSON; outputFormat: 'text'; status: 400 }
        | { input: {}; output: NotFound; outputFormat: 'text'; status: 404 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/jwt/data': {
      $get:
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | { status?: StatusOK | undefined; userDataInJWT?: UserDataInJWT | undefined }
              | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sessionHandle?: Handle | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInJWT?: UserDataInJWT | undefined
              }
            }
            output: StatusOKResponse | UnauthorisedMessageResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInJWT?: UserDataInJWT | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInJWT?: UserDataInJWT | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInJWT?: UserDataInJWT | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                sessionHandle?: Handle | undefined
                userDataInJWT?: UserDataInJWT | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/user': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output:
              | {
                  status?: 'OK' | undefined
                  user?:
                    | {
                        userId?: string | undefined
                        email?: string | undefined
                        timeCreated?: number | undefined
                      }
                    | undefined
                }
              | { status?: 'EMAIL_ALREADY_EXISTS_ERROR' | undefined }
              | { status?: 'PASSWORD_WEAK_ERROR' | undefined; message?: string | undefined }
              | { status?: 'INVALID_EMAIL_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: {
              status?: 'USER_LIMIT_REACHED_ERROR' | undefined
              message?: string | undefined
            }
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | {
                    email?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
                | {
                    userId?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
            }
            output:
              | {
                  status?: 'OK' | undefined
                  user?:
                    | {
                        userId?: string | undefined
                        email?: string | undefined
                        timeCreated?: number | undefined
                      }
                    | undefined
                }
              | { status?: 'EMAIL_ALREADY_EXISTS_ERROR' | undefined }
              | { status?: 'PASSWORD_WEAK_ERROR' | undefined; message?: string | undefined }
              | { status?: 'INVALID_EMAIL_ERROR' | undefined }
              | { status?: 'UNKNOWN_USER_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | {
                    email?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
                | {
                    userId?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | {
                    email?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
                | {
                    userId?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | {
                    email?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
                | {
                    userId?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json:
                | {
                    email?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
                | {
                    userId?: string | undefined
                    newPassword?: string | undefined
                    newEmail?: string | undefined
                  }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $delete:
        | {
            input: { query: { email?: string | undefined; userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; didUserExist?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { email?: string | undefined; userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { email?: string | undefined; userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { email?: string | undefined; userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { email?: string | undefined; userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/users': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status?: 'OK' | undefined
              users?:
                | {
                    email?: string | undefined
                    userId?: string | undefined
                    timeCreated?: number | undefined
                    isSuspended?: boolean | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/session/verify': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionId?: string | undefined } }
            output:
              | { status?: 'OK' | undefined; email?: string | undefined }
              | { status?: 'USER_SUSPENDED_ERROR' | undefined; message?: string | undefined }
              | { status?: 'INVAlID_SESSION_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionId?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionId?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionId?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionId?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/session': {
      $delete:
        | {
            input: { query: { sessionId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sessionId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { sessionId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { sessionId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { sessionId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/signin': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output:
              | { status?: 'OK' | undefined; sessionId?: string | undefined }
              | { status?: 'USER_SUSPENDED_ERROR' | undefined; message?: string | undefined }
              | { status?: 'INVAlID_CREDENTIALS_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { email?: string | undefined; password?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/dashboard/user/sessions': {
      $get:
        | {
            input: { query: { userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              sessions?:
                | {
                    userId?: UserId | undefined
                    sessionId?: string | undefined
                    timeCreated?: number | undefined
                    expiry?: number | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/apiversion': {
      $get:
        | {
            input: {
              query: { websiteDomain?: string | undefined; apiDomain?: string | undefined }
            } & { header: { Authorization?: string | undefined } }
            output: { versions?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { websiteDomain?: string | undefined; apiDomain?: string | undefined }
            } & { header: { Authorization?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: { websiteDomain?: string | undefined; apiDomain?: string | undefined }
            } & { header: { Authorization?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: { websiteDomain?: string | undefined; apiDomain?: string | undefined }
            } & { header: { Authorization?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: { websiteDomain?: string | undefined; apiDomain?: string | undefined }
            } & { header: { Authorization?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/config': {
      $get:
        | {
            input: { query: { pid?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output:
              | { status?: StatusOK | undefined; path?: string | undefined }
              | { status?: 'NOT_ALLOWED' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { pid?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { pid?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { pid?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { pid?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/': {
      $get:
        | { input: {}; output: HelloResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/appid-<appId>/<tenantId>/hello': {
      $get:
        | { input: {}; output: HelloResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
      $put:
        | { input: {}; output: HelloResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
      $post:
        | { input: {}; output: HelloResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
      $delete:
        | { input: {}; output: HelloResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InternalError; outputFormat: 'text'; status: 500 }
    }
  } & {
    '/appid-<appId>/telemetry': {
      $get:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output:
              | { exists?: true | undefined; telemetryId?: string | undefined }
              | { exists?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/users/count': {
      $get:
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                includeAllTenants?: boolean | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: { status?: StatusOK | undefined; count?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                includeAllTenants?: boolean | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                includeAllTenants?: boolean | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                includeAllTenants?: boolean | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                includeAllTenants?: boolean | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/users/count/active': {
      $get:
        | {
            input: { query: { since: number } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: { status?: StatusOK | undefined; count?: number | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { since: number } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { since: number } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { since: number } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { since: number } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/users': {
      $get:
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                paginationToken?: string | undefined
                limit?: number | undefined
                timeJoinedOrder?: 'ASC' | 'DESC' | undefined
                email?: string | undefined
                phone?: number | undefined
                recipe?: string | undefined
                provider?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: {
              status?: StatusOK | undefined
              users?: { user?: AuthRecipeUser | undefined }[] | undefined
              nextPaginationToken?: PaginationToken | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                paginationToken?: string | undefined
                limit?: number | undefined
                timeJoinedOrder?: 'ASC' | 'DESC' | undefined
                email?: string | undefined
                phone?: number | undefined
                recipe?: string | undefined
                provider?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                paginationToken?: string | undefined
                limit?: number | undefined
                timeJoinedOrder?: 'ASC' | 'DESC' | undefined
                email?: string | undefined
                phone?: number | undefined
                recipe?: string | undefined
                provider?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                paginationToken?: string | undefined
                limit?: number | undefined
                timeJoinedOrder?: 'ASC' | 'DESC' | undefined
                email?: string | undefined
                phone?: number | undefined
                recipe?: string | undefined
                provider?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                includeRecipeIds?: string | undefined
                paginationToken?: string | undefined
                limit?: number | undefined
                timeJoinedOrder?: 'ASC' | 'DESC' | undefined
                email?: string | undefined
                phone?: number | undefined
                recipe?: string | undefined
                provider?: string | undefined
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/user/remove': {
      $post:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { userId: UserId; removeAllLinkedAccounts?: boolean | undefined } }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { userId: UserId; removeAllLinkedAccounts?: boolean | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { userId: UserId; removeAllLinkedAccounts?: boolean | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { userId: UserId; removeAllLinkedAccounts?: boolean | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/user/search/tags': {
      $get:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: { status?: StatusOK | undefined; tags?: string[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/ee/featureflag': {
      $get:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: {
              status?: StatusOK | undefined
              features?: string[] | undefined
              usageStats?: { [x: string]: unknown } | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/ee/license': {
      $put:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { licenseKey?: string | undefined } }
            output:
              | { status?: StatusOK | undefined }
              | { status?: 'MISSING_EE_FOLDER_ERROR' | undefined }
              | { status?: 'INVALID_LICENSE_KEY_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { licenseKey?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { licenseKey?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            } & { json: { licenseKey?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $delete:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: { status?: StatusOK | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $get:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output:
              | { status?: StatusOK | undefined; licenseKey?: string | undefined }
              | { status?: 'NO_LICENSE_KEY_FOUND_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/user/id': {
      $get:
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output:
              | { status?: StatusOK | undefined; user?: AuthRecipeUser | undefined }
              | { status?: 'UNKNOWN_USER_ID_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { userId?: string | undefined } } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/users/by-accountinfo': {
      $get:
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: string | undefined
                thirdPartyId?: string | undefined
                thirdPartyUserId?: string | undefined
                doUnionOfAccountInfo: boolean
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: { status?: StatusOK | undefined; users?: AuthRecipeUser[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: string | undefined
                thirdPartyId?: string | undefined
                thirdPartyUserId?: string | undefined
                doUnionOfAccountInfo: boolean
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: string | undefined
                thirdPartyId?: string | undefined
                thirdPartyUserId?: string | undefined
                doUnionOfAccountInfo: boolean
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: string | undefined
                thirdPartyId?: string | undefined
                thirdPartyUserId?: string | undefined
                doUnionOfAccountInfo: boolean
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                email?: string | undefined
                phoneNumber?: string | undefined
                thirdPartyId?: string | undefined
                thirdPartyUserId?: string | undefined
                doUnionOfAccountInfo: boolean
              }
            } & {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/requests/stats': {
      $get:
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: {
              status?: StatusOK | undefined
              atMinute?: number | undefined
              averageRequestsPerSecond?: number[] | undefined
              peakRequestsPerSecond?: number[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: { Authorization?: string | undefined; 'cdi-version'?: string | undefined }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/connectionuridomain': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/connectionuridomain/v2': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                connectionUriDomain: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/connectionuridomain/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: { status: StatusOK; didExist: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { connectionUriDomain: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/connectionuridomain/list': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              connectionUriDomains: {
                connectionUriDomain?: string | undefined
                apps?:
                  | { appId?: string | undefined; tenants?: TenantConfig[] | undefined }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/connectionuridomain/list/v2': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              connectionUriDomains: {
                connectionUriDomain?: string | undefined
                apps?:
                  | { appId?: string | undefined; tenants?: TenantConfigV2[] | undefined }[]
                  | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/app': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/app/v2': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                appId: string
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/app/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: { status: StatusOK; didExist: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { appId: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/app/list': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              apps: { appId?: string | undefined; tenants?: TenantConfig[] | undefined }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/recipe/multitenancy/app/list/v2': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              apps: { appId?: string | undefined; tenants?: TenantConfigV2[] | undefined }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/multitenancy/tenant': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                emailPasswordEnabled?: boolean | undefined
                thirdPartyEnabled?: boolean | undefined
                passwordlessEnabled?: boolean | undefined
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/multitenancy/tenant/v2': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: { status: StatusOK; createdNew: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                tenantId: TenantId
                firstFactors?: FirstFactors | undefined
                requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                coreConfig?: { [x: string]: unknown } | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  tenantId: TenantId
                  emailPassword: { enabled: boolean }
                  thirdParty: {
                    enabled: boolean
                    providers?: ThirdPartyProviderConfig[] | undefined
                  }
                  passwordless: { enabled: boolean }
                  firstFactors?: FirstFactors | undefined
                  requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                  coreConfig: { [x: string]: unknown }
                }
              | { status?: 'TENANT_NOT_FOUND_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/v2': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  tenantId: TenantId
                  thirdParty: { providers?: ThirdPartyProviderConfig[] | undefined }
                  firstFactors?: FirstFactors | undefined
                  requiredSecondaryFactors?: RequiredSecondaryFactors | undefined
                  coreConfig: { [x: string]: unknown }
                }
              | { status?: 'TENANT_NOT_FOUND_ERROR' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/dashboard/tenant/core-config': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: {
              status: StatusOK
              config: {
                key?: string | undefined
                valueType?: 'string' | 'number' | 'boolean' | undefined
                value?: string | number | boolean | undefined
                description?: string | undefined
                isDifferentAcrossTenants?: boolean | undefined
                possibleValues?: (string[] | null) | undefined
                isNullable?: boolean | undefined
                defaultValue?: string | number | boolean | undefined
                isPluginProperty?: boolean | undefined
                isPluginPropertyEditable?: boolean | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/multitenancy/tenant/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: { status: StatusOK; didExist: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { tenantId: TenantId } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/multitenancy/tenant/list': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status: StatusOK; tenants: TenantConfig[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/multitenancy/tenant/list/v2': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status: StatusOK; tenants: TenantConfigV2[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output:
              | { status: StatusOK; createdNew: boolean }
              | { status: 'CONFIG_VALIDATION_ERROR'; reason: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { config: ThirdPartyProviderConfig; skipValidation?: boolean | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/config/thirdparty/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: { status?: StatusOK | undefined; didConfigExist?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { thirdPartyId: ThirdPartyId } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output:
              | { status: StatusOK; wasAlreadyAssociated: boolean }
              | {
                  status:
                    | 'UNKNOWN_USER_ID_ERROR'
                    | 'EMAIL_ALREADY_EXISTS_ERROR'
                    | 'PHONE_NUMBER_ALREADY_EXISTS_ERROR'
                    | 'THIRD_PARTY_USER_ALREADY_EXISTS_ERROR'
                }
              | {
                  status?: 'ASSOCIATION_NOT_ALLOWED_ERROR' | undefined
                  reason?: string | undefined
                }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/<tenantId>/recipe/multitenancy/tenant/user/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: { status: StatusOK; wasAssociated: boolean }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { recipeUserId: UserId } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/clients': {
      $get:
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  clientId?: string | undefined
                  clientName?: string | undefined
                  clientSecret?: string | undefined
                  redirectUris?: string[] | undefined
                  grantTypes?: string[] | undefined
                  responseTypes?: string[] | undefined
                  scope?: string | undefined
                  audience?: string[] | undefined
                  policyUri?: string | undefined
                  allowedCorsOrigins?: string[] | undefined
                  tosUri?: string | undefined
                  clientUri?: string | undefined
                  logoUri?: string | undefined
                  tokenEndpointAuthMethod?: string | undefined
                  createdAt?: string | undefined
                  updatedAt?: string | undefined
                  postLogoutRedirectUris?: string[] | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  authorizationCodeGrantAccessTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantIdTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantRefreshTokenLifespan?: (string | null) | undefined
                  clientCredentialsGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantAccessTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantRefreshTokenLifespan?: (string | null) | undefined
                  enableRefreshTokenRotation?: boolean | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { clientId: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output:
              | {
                  status?: StatusOK | undefined
                  clientId?: string | undefined
                  clientName?: string | undefined
                  clientSecret?: string | undefined
                  redirectUris?: string[] | undefined
                  grantTypes?: string[] | undefined
                  responseTypes?: string[] | undefined
                  scope?: string | undefined
                  audience?: string[] | undefined
                  policyUri?: string | undefined
                  allowedCorsOrigins?: string[] | undefined
                  tosUri?: string | undefined
                  clientUri?: string | undefined
                  logoUri?: string | undefined
                  tokenEndpointAuthMethod?: string | undefined
                  createdAt?: string | undefined
                  updatedAt?: string | undefined
                  postLogoutRedirectUris?: string[] | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  authorizationCodeGrantAccessTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantIdTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantRefreshTokenLifespan?: (string | null) | undefined
                  clientCredentialsGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantAccessTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantRefreshTokenLifespan?: (string | null) | undefined
                  enableRefreshTokenRotation?: boolean | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output:
              | {
                  status?: StatusOK | undefined
                  clientId?: string | undefined
                  clientName?: string | undefined
                  clientSecret?: string | undefined
                  redirectUris?: string[] | undefined
                  grantTypes?: string[] | undefined
                  responseTypes?: string[] | undefined
                  scope?: string | undefined
                  audience?: string[] | undefined
                  policyUri?: string | undefined
                  allowedCorsOrigins?: string[] | undefined
                  tosUri?: string | undefined
                  clientUri?: string | undefined
                  logoUri?: string | undefined
                  tokenEndpointAuthMethod?: string | undefined
                  createdAt?: string | undefined
                  updatedAt?: string | undefined
                  postLogoutRedirectUris?: string[] | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  authorizationCodeGrantAccessTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantIdTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantRefreshTokenLifespan?: (string | null) | undefined
                  clientCredentialsGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantAccessTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantRefreshTokenLifespan?: (string | null) | undefined
                  enableRefreshTokenRotation?: boolean | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: OauthClient }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/clients/list': {
      $get:
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  clients?: OauthClient[] | undefined
                  nextPaginationToken?: string | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                pageSize?: number | undefined
                pageToken?: string | undefined
                clientName?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/clients/remove': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: { status?: StatusOK | undefined; didExist?: boolean | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { clientId?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/consent': {
      $get:
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  client?: OauthClient | undefined
                  requestedScope?: string[] | undefined
                  requestedAudience?: string[] | undefined
                  requestedClaims?:
                    | {
                        idToken?:
                          | { property1?: string | undefined; property2?: string | undefined }
                          | undefined
                      }
                    | undefined
                  loginHint?: string | undefined
                  uiLocales?: string[] | undefined
                  acrValues?: string[] | undefined
                  subject?: string | undefined
                  requestUrl?: string | undefined
                  skip?: boolean | undefined
                  clientId?: string | undefined
                  redirectUri?: string | undefined
                  forceSubjectIdentifier?: string | undefined
                  requestedAccessTokenAudience?: string[] | undefined
                  context?: { [x: string]: unknown } | undefined
                  sessionId?: string | undefined
                  loginSessionId?: string | undefined
                  loginChallenge?: string | undefined
                  loginRequestedAt?: string | undefined
                  consentRequestedAt?: string | undefined
                  consentChallenge?: string | undefined
                  consentSkip?: boolean | undefined
                  consentRemember?: boolean | undefined
                  consentRememberFor?: number | undefined
                  consentError?:
                    | { name?: string | undefined; description?: string | undefined }
                    | undefined
                  consentErrorDebug?: string | undefined
                  consentErrorDescription?: string | undefined
                  consentErrorHint?: string | undefined
                  consentErrorCode?: string | undefined
                  consentStatusCode?: number | undefined
                  sessionIdToken?:
                    | { property1?: string | undefined; property2?: string | undefined }
                    | undefined
                  sessionAccessToken?:
                    | { property1?: string | undefined; property2?: string | undefined }
                    | undefined
                  sessionToken?:
                    | { property1?: string | undefined; property2?: string | undefined }
                    | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/consent/accept': {
      $put:
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                context?: { [x: string]: unknown } | undefined
                grantAccessTokenAudience?: string[] | undefined
                grantScope?: string[] | undefined
                handledAt?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                session?:
                  | {
                      accessToken?: { [x: string]: unknown } | undefined
                      idToken?: { [x: string]: unknown } | undefined
                    }
                  | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/consent/reject': {
      $put:
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { consentChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/login': {
      $get:
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  challenge?: string | undefined
                  client?: OauthClient | undefined
                  oidcContext?:
                    | {
                        acrValues?: string[] | undefined
                        display?: string | undefined
                        idTokenHintClaims?: { [x: string]: unknown } | undefined
                        loginHint?: string | undefined
                        uiLocales?: string[] | undefined
                        requestUrl?: string | undefined
                        requestedAccessTokenAudience?: string[] | undefined
                        requestedScope?: string[] | undefined
                        sessionId?: string | undefined
                        skip?: boolean | undefined
                        subject?: string | undefined
                      }
                    | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/login/accept': {
      $put:
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                acr?: string | undefined
                amr?: string[] | undefined
                context?: (string | null) | undefined
                extendSessionLifespan?: boolean | undefined
                forceSubjectIdentifier?: string | undefined
                identityProviderSessionId?: string | undefined
                remember?: boolean | undefined
                rememberFor?: number | undefined
                subject: string
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/login/reject': {
      $put:
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { query: { loginChallenge: string } } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                error?: string | undefined
                errorDebug?: string | undefined
                errorDescription?: string | undefined
                errorHint?: string | undefined
                statusCode?: number | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/logout/accept': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth/requests/logout/reject': {
      $put:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: { status?: StatusOK | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { challenge?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/session/revoke': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: { status?: StatusOK | undefined; didExist?: boolean | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { sessionHandle?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/token/revoke': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: { status?: StatusOK | undefined; didExist?: boolean | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/tokens/revoke': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: { status?: StatusOK | undefined; didExist?: boolean | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { client_id?: string | undefined } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/auth': {
      $get:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output:
              | {
                  status?: StatusOK | undefined
                  clientId?: string | undefined
                  clientName?: string | undefined
                  clientSecret?: string | undefined
                  redirectUris?: string[] | undefined
                  grantTypes?: string[] | undefined
                  responseTypes?: string[] | undefined
                  scope?: string | undefined
                  audience?: string[] | undefined
                  policyUri?: string | undefined
                  allowedCorsOrigins?: string[] | undefined
                  tosUri?: string | undefined
                  clientUri?: string | undefined
                  logoUri?: string | undefined
                  tokenEndpointAuthMethod?: string | undefined
                  createdAt?: string | undefined
                  updatedAt?: string | undefined
                  postLogoutRedirectUris?: string[] | undefined
                  metadata?: { [x: string]: unknown } | undefined
                  authorizationCodeGrantAccessTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantIdTokenLifespan?: (string | null) | undefined
                  authorizationCodeGrantRefreshTokenLifespan?: (string | null) | undefined
                  clientCredentialsGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantAccessTokenLifespan?: (string | null) | undefined
                  implicitGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantIdTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantAccessTokenLifespan?: (string | null) | undefined
                  refreshTokenGrantRefreshTokenLifespan?: (string | null) | undefined
                  enableRefreshTokenRotation?: boolean | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/token': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output:
              | {
                  status: StatusOK
                  access_token: string
                  expires_in?: number | undefined
                  id_token?: string | undefined
                  refresh_token?: string | undefined
                  scope?: string | undefined
                  token_type?: string | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & {
              json: {
                iss?: string | undefined
                inputBody?: { [x: string]: unknown } | undefined
                useStaticSigningKey?: boolean | undefined
                authorizationHeader?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/sessions/logout': {
      $get:
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: { status?: StatusOK | undefined; redirectTo?: string | undefined } | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              query: {
                clientId?: string | undefined
                idTokenHint?: string | undefined
                postLogoutRedirectUri?: string | undefined
                state?: string | undefined
              }
            } & {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  } & {
    '/appid-<appId>/recipe/oauth/introspect': {
      $post:
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output:
              | {
                  status?: StatusOK | undefined
                  active?: boolean | undefined
                  iat?: number | undefined
                  exp?: number | undefined
                  client_id?: string | undefined
                  iss?: string | undefined
                  jti?: string | undefined
                  nbf?: number | undefined
                  scp?: string[] | undefined
                  sub?: string | undefined
                  stt?: number | undefined
                  sessionHandle?: string | undefined
                  rsub?: string | undefined
                  tId?: string | undefined
                  gid?: string | undefined
                  token_type?: string | undefined
                  token_use?: string | undefined
                }
              | OauthError
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output: InvalidJSON
            outputFormat: 'text'
            status: 400
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output: RequestUnauthorised
            outputFormat: 'text'
            status: 401
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output: LicenseError
            outputFormat: 'text'
            status: 402
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output: NotFound
            outputFormat: 'text'
            status: 404
          }
        | {
            input: {
              header: {
                rid?: string | undefined
                Authorization?: string | undefined
                'cdi-version'?: string | undefined
              }
            } & { json: { token: string } }
            output: InternalError
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes

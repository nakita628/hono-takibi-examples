import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute,
  deleteUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationRoute,
  deleteUsersUserIdAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  deleteUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationEmailMethodsCountRoute,
  getUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationEmailMethodsRoute,
  getUsersUserIdAuthenticationExternalAuthenticationMethodsCountRoute,
  getUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationExternalAuthenticationMethodsRoute,
  getUsersUserIdAuthenticationFido2MethodsCountRoute,
  getUsersUserIdAuthenticationFido2MethodsCreationOptionsRoute,
  getUsersUserIdAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationFido2MethodsRoute,
  getUsersUserIdAuthenticationMethodsAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationMethodsCountRoute,
  getUsersUserIdAuthenticationMethodsRoute,
  getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsCountRoute,
  getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdDeviceRoute,
  getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsRoute,
  getUsersUserIdAuthenticationOperationsCountRoute,
  getUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute,
  getUsersUserIdAuthenticationOperationsRoute,
  getUsersUserIdAuthenticationPasswordMethodsCountRoute,
  getUsersUserIdAuthenticationPasswordMethodsPasswordAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationPasswordMethodsRoute,
  getUsersUserIdAuthenticationPhoneMethodsCountRoute,
  getUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationPhoneMethodsRoute,
  getUsersUserIdAuthenticationPlatformCredentialMethodsCountRoute,
  getUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdDeviceRoute,
  getUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationPlatformCredentialMethodsRoute,
  getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsCountRoute,
  getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdDeviceRoute,
  getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsRoute,
  getUsersUserIdAuthenticationRoute,
  getUsersUserIdAuthenticationSoftwareOathMethodsCountRoute,
  getUsersUserIdAuthenticationSoftwareOathMethodsRoute,
  getUsersUserIdAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationTemporaryAccessPassMethodsCountRoute,
  getUsersUserIdAuthenticationTemporaryAccessPassMethodsRoute,
  getUsersUserIdAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsCountRoute,
  getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsRoute,
  getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdDeviceRoute,
  getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  patchUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  patchUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  patchUsersUserIdAuthenticationMethodsAuthenticationMethodIdRoute,
  patchUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute,
  patchUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  patchUsersUserIdAuthenticationRoute,
  postUsersUserIdAuthenticationEmailMethodsRoute,
  postUsersUserIdAuthenticationExternalAuthenticationMethodsRoute,
  postUsersUserIdAuthenticationMethodsAuthenticationMethodIdResetPasswordRoute,
  postUsersUserIdAuthenticationMethodsRoute,
  postUsersUserIdAuthenticationOperationsRoute,
  postUsersUserIdAuthenticationPasswordMethodsRoute,
  postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdDisableSmsSignInRoute,
  postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdEnableSmsSignInRoute,
  postUsersUserIdAuthenticationPhoneMethodsRoute,
  postUsersUserIdAuthenticationTemporaryAccessPassMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersAuthenticationHandler = app
  .openapi(getUsersUserIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationEmailMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationExternalAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationExternalAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationExternalAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationFido2MethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationFido2MethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationFido2MethodsCreationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMethodsAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAuthenticationMethodsAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationMethodsAuthenticationMethodIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationMicrosoftAuthenticatorMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPasswordMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationPasswordMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPasswordMethodsPasswordAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPasswordMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdDisableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postUsersUserIdAuthenticationPhoneMethodsPhoneAuthenticationMethodIdEnableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationPhoneMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationPlatformCredentialMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationPlatformCredentialMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationResourceAccountKeyAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationSoftwareOathMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationSoftwareOathMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationTemporaryAccessPassMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdAuthenticationWindowsHelloForBusinessMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

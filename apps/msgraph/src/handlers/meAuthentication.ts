import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  deleteMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  deleteMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  deleteMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  deleteMeAuthenticationOperationsLongRunningOperationIdRoute,
  deleteMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  deleteMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
  deleteMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
  deleteMeAuthenticationRoute,
  deleteMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  deleteMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  deleteMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  getMeAuthenticationEmailMethodsCountRoute,
  getMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  getMeAuthenticationEmailMethodsRoute,
  getMeAuthenticationExternalAuthenticationMethodsCountRoute,
  getMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  getMeAuthenticationExternalAuthenticationMethodsRoute,
  getMeAuthenticationFido2MethodsCountRoute,
  getMeAuthenticationFido2MethodsCreationOptionsRoute,
  getMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  getMeAuthenticationFido2MethodsRoute,
  getMeAuthenticationMethodsAuthenticationMethodIdRoute,
  getMeAuthenticationMethodsCountRoute,
  getMeAuthenticationMethodsRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsCountRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsRoute,
  getMeAuthenticationOperationsCountRoute,
  getMeAuthenticationOperationsLongRunningOperationIdRoute,
  getMeAuthenticationOperationsRoute,
  getMeAuthenticationPasswordMethodsCountRoute,
  getMeAuthenticationPasswordMethodsPasswordAuthenticationMethodIdRoute,
  getMeAuthenticationPasswordMethodsRoute,
  getMeAuthenticationPhoneMethodsCountRoute,
  getMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  getMeAuthenticationPhoneMethodsRoute,
  getMeAuthenticationPlatformCredentialMethodsCountRoute,
  getMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
  getMeAuthenticationPlatformCredentialMethodsRoute,
  getMeAuthenticationResourceAccountKeyAuthenticationMethodsCountRoute,
  getMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
  getMeAuthenticationResourceAccountKeyAuthenticationMethodsRoute,
  getMeAuthenticationRoute,
  getMeAuthenticationSoftwareOathMethodsCountRoute,
  getMeAuthenticationSoftwareOathMethodsRoute,
  getMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  getMeAuthenticationTemporaryAccessPassMethodsCountRoute,
  getMeAuthenticationTemporaryAccessPassMethodsRoute,
  getMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsCountRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  patchMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  patchMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
  patchMeAuthenticationMethodsAuthenticationMethodIdRoute,
  patchMeAuthenticationOperationsLongRunningOperationIdRoute,
  patchMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  patchMeAuthenticationRoute,
  postMeAuthenticationEmailMethodsRoute,
  postMeAuthenticationExternalAuthenticationMethodsRoute,
  postMeAuthenticationMethodsAuthenticationMethodIdResetPasswordRoute,
  postMeAuthenticationMethodsRoute,
  postMeAuthenticationOperationsRoute,
  postMeAuthenticationPasswordMethodsRoute,
  postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdDisableSmsSignInRoute,
  postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdEnableSmsSignInRoute,
  postMeAuthenticationPhoneMethodsRoute,
  postMeAuthenticationTemporaryAccessPassMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meAuthenticationHandler = app
  .openapi(getMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationExternalAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationExternalAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationExternalAuthenticationMethodsExternalAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationExternalAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsCreationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationMethodsAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationMethodsAuthenticationMethodIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationMicrosoftAuthenticatorMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationMicrosoftAuthenticatorMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPasswordMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationPasswordMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPasswordMethodsPasswordAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPasswordMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdDisableSmsSignInRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdEnableSmsSignInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPhoneMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPlatformCredentialMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationPlatformCredentialMethodsPlatformCredentialAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationPlatformCredentialMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationResourceAccountKeyAuthenticationMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationResourceAccountKeyAuthenticationMethodsResourceAccountKeyAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationResourceAccountKeyAuthenticationMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationSoftwareOathMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationSoftwareOathMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationTemporaryAccessPassMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationWindowsHelloForBusinessMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdDeviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationWindowsHelloForBusinessMethodsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

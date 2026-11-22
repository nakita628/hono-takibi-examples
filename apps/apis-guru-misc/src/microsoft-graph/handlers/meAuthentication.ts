import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  deleteMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  deleteMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  deleteMeAuthenticationOperationsLongRunningOperationIdRoute,
  deleteMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  deleteMeAuthenticationRoute,
  deleteMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  deleteMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  deleteMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  getMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  getMeAuthenticationEmailMethodsRoute,
  getMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute,
  getMeAuthenticationFido2MethodsRoute,
  getMeAuthenticationMethodsAuthenticationMethodIdRoute,
  getMeAuthenticationMethodsRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
  getMeAuthenticationMicrosoftAuthenticatorMethodsRoute,
  getMeAuthenticationOperationsLongRunningOperationIdRoute,
  getMeAuthenticationOperationsRoute,
  getMeAuthenticationPasswordMethodsPasswordAuthenticationMethodIdRoute,
  getMeAuthenticationPasswordMethodsRoute,
  getMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  getMeAuthenticationPhoneMethodsRoute,
  getMeAuthenticationRoute,
  getMeAuthenticationSoftwareOathMethodsRoute,
  getMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
  getMeAuthenticationTemporaryAccessPassMethodsRoute,
  getMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdDeviceRoute,
  getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
  patchMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute,
  patchMeAuthenticationMethodsAuthenticationMethodIdRoute,
  patchMeAuthenticationOperationsLongRunningOperationIdRoute,
  patchMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute,
  patchMeAuthenticationRoute,
  postMeAuthenticationEmailMethodsRoute,
  postMeAuthenticationMethodsRoute,
  postMeAuthenticationOperationsRoute,
  postMeAuthenticationPasswordMethodsRoute,
  postMeAuthenticationPhoneMethodsRoute,
  postMeAuthenticationTemporaryAccessPassMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meAuthenticationHandler = app
  .openapi(deleteMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationEmailMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationEmailMethodsEmailAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationFido2MethodsFido2AuthenticationMethodIdRoute, (c) => {
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
  .openapi(getMeAuthenticationMicrosoftAuthenticatorMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationMicrosoftAuthenticatorMethodsMicrosoftAuthenticatorAuthenticationMethodIdRoute,
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
  .openapi(getMeAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationOperationsLongRunningOperationIdRoute, (c) => {
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
  .openapi(getMeAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationPhoneMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeAuthenticationPhoneMethodsPhoneAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationSoftwareOathMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationSoftwareOathMethodsSoftwareOathAuthenticationMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeAuthenticationTemporaryAccessPassMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationTemporaryAccessPassMethodsTemporaryAccessPassAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMeAuthenticationWindowsHelloForBusinessMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMeAuthenticationWindowsHelloForBusinessMethodsWindowsHelloForBusinessAuthenticationMethodIdRoute,
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

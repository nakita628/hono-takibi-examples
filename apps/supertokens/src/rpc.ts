import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppidAppIdRecipeAccountlinkingUserPrimaryCheck(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.accountlinking.user.primary.check.$get(args, options),
  )
}

export async function getAppidAppIdRecipeAccountlinkingUserLinkCheck(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['check']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.accountlinking.user.link.check.$get(args, options),
  )
}

export async function postAppidAppIdRecipeAccountlinkingUserPrimary(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['primary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.accountlinking.user.primary.$post(args, options),
  )
}

export async function postAppidAppIdRecipeAccountlinkingUserLink(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['link']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.accountlinking.user.link.$post(args, options),
  )
}

export async function postAppidAppIdRecipeAccountlinkingUserUnlink(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['accountlinking']['user']['unlink']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.accountlinking.user.unlink.$post(args, options),
  )
}

export async function putAppidAppIdRecipeTotpDevice(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.totp.device.$put(args, options))
}

export async function postAppidAppIdRecipeTotpDevice(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['totp']['device']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.totp.device.$post(args, options))
}

export async function getAppidAppIdRecipeTotpDeviceList(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.totp.device.list.$get(args, options))
}

export async function postRecipeTotpDeviceImport(
  args: InferRequestType<typeof client.recipe.totp.device.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.totp.device.import.$post(args, options))
}

export async function postAppidAppIdRecipeTotpDeviceRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['totp']['device']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.totp.device.remove.$post(args, options))
}

export async function postAppidAppIdTenantIdRecipeTotpVerify(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.totp.verify.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeTotpDeviceVerify(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['totp']['device']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.totp.device.verify.$post(args, options),
  )
}

export async function getAppidAppIdRecipeUseridMap(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.userid.map.$get(args, options))
}

export async function postAppidAppIdRecipeUseridMap(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['userid']['map']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.userid.map.$post(args, options))
}

export async function postAppidAppIdRecipeUseridMapRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['userid']['map']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.userid.map.remove.$post(args, options))
}

export async function putAppidAppIdRecipeUseridExternalUserIdInfo(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['userid']['external-user-id-info']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.userid['external-user-id-info'].$put(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninupCodeCheck(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.code.check.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninupCodeConsume(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['consume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.code.consume.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninupCode(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.code.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninupCodeRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['code']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.code.remove.$post(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeSigninupCodes(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.$get(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninupCodesRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['codes']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.codes.remove.$post(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeUser(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$get(args, options),
  )
}

export async function putAppidAppIdTenantIdRecipeUser(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀⠀']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe['user⠀⠀'].$put(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSignin(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signin.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeSignup(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signup.$post(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeUser2(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$get(args, options))
}

export async function putAppidAppIdTenantIdRecipeUser2(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].recipe.user.$put(args, options))
}

export async function postAppidAppIdTenantIdRecipeUserPasswordResetToken(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserPasswordReset(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserPasswordhashImport(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['passwordhash']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.passwordhash.import.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserPasswordResetTokenConsume(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['password']['reset']['token']['consume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.password.reset.token.consume.$post(
      args,
      options,
    ),
  )
}

export async function postAppidAppIdTenantIdRecipeSigninup(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['signinup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.signinup.$post(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeUser3(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['recipe']['user⠀']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe['user⠀'].$get(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeUsersByEmail(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['users']['by-email']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.users['by-email'].$get(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserEmailVerifyToken(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserEmailVerifyTokenRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['token']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.token.remove.$post(
      args,
      options,
    ),
  )
}

export async function postAppidAppIdTenantIdRecipeUserEmailVerify(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['email']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.email.verify.$post(args, options),
  )
}

export async function getAppidAppIdRecipeUserEmailVerify(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.user.email.verify.$get(args, options))
}

export async function postAppidAppIdRecipeUserEmailVerifyRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['email']['verify']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.user.email.verify.remove.$post(args, options),
  )
}

export async function getAppidAppIdRecipeUserMetadata(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.user.metadata.$get(args, options))
}

export async function putAppidAppIdRecipeUserMetadata(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['user']['metadata']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.user.metadata.$put(args, options))
}

export async function postAppidAppIdRecipeUserMetadataRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['user']['metadata']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.user.metadata.remove.$post(args, options),
  )
}

export async function putAppidAppIdTenantIdRecipeUserRole(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.role.$put(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeUserRoleRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['role']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.role.remove.$post(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeUserRoles(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['user']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.user.roles.$get(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeRoleUsers(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['role']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.role.users.$get(args, options),
  )
}

export async function putAppidAppIdRecipeRole(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.role.$put(args, options))
}

export async function getAppidAppIdRecipeRolePermissions(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.role.permissions.$get(args, options))
}

export async function postAppidAppIdRecipeRolePermissionsRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['role']['permissions']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.role.permissions.remove.$post(args, options),
  )
}

export async function getAppidAppIdRecipePermissionRoles(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['permission']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.permission.roles.$get(args, options))
}

export async function postAppidAppIdRecipeRoleRemove(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['role']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.role.remove.$post(args, options))
}

export async function getAppidAppIdRecipeRoles(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.roles.$get(args, options))
}

export async function postAppidAppIdTenantIdRecipeSession(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.session.$post(args, options),
  )
}

export async function getAppidAppIdRecipeSession(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.$get(args, options))
}

export async function postAppidAppIdTenantIdRecipeSessionRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.session.remove.$post(args, options),
  )
}

export async function postAppidAppIdRecipeSessionVerify(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.verify.$post(args, options))
}

export async function postAppidAppIdRecipeSessionRefresh(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.refresh.$post(args, options))
}

export async function getAppidAppIdTenantIdRecipeSessionUser(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['session']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.session.user.$get(args, options),
  )
}

export async function postAppidAppIdRecipeSessionRegenerate(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['session']['regenerate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.regenerate.$post(args, options))
}

export async function getAppidAppIdRecipeSessionData(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.data.$get(args, options))
}

export async function putAppidAppIdRecipeSessionData(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['session']['data']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.session.data.$put(args, options))
}

export async function postAppidAppIdRecipeJwt(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.jwt.$post(args, options))
}

export async function getAppidAppIdRecipeJwtJwks(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['jwt']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.jwt.jwks.$get(args, options))
}

export async function getAppidAppIdWellKnownJwksJson(options?: ClientRequestOptions) {
  return await parseResponse(
    client['appid-<appId>']['.well-known']['jwks.json'].$get(undefined, options),
  )
}

export async function getAppidAppIdTenantIdRecipeJwtData(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$get(args, options),
  )
}

export async function putAppidAppIdTenantIdRecipeJwtData(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['jwt']['data']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.jwt.data.$put(args, options),
  )
}

export async function putAppidAppIdRecipeDashboardUser(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.dashboard.user.$put(args, options))
}

export async function postAppidAppIdRecipeDashboardUser(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.dashboard.user.$post(args, options))
}

export async function deleteAppidAppIdRecipeDashboardUser(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.dashboard.user.$delete(args, options))
}

export async function getAppidAppIdRecipeDashboardUsers(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['dashboard']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.dashboard.users.$get(args, options))
}

export async function postAppidAppIdRecipeDashboardSessionVerify(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['verify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.dashboard.session.verify.$post(args, options),
  )
}

export async function deleteAppidAppIdRecipeDashboardSession(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['session']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.dashboard.session.$delete(args, options),
  )
}

export async function postAppidAppIdRecipeDashboardSignin(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['signin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.dashboard.signin.$post(args, options))
}

export async function getAppidAppIdRecipeDashboardUserSessions(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['dashboard']['user']['sessions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.dashboard.user.sessions.$get(args, options),
  )
}

export async function getAppidAppIdApiversion(
  args: InferRequestType<(typeof client)['appid-<appId>']['apiversion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].apiversion.$get(args, options))
}

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function getAppidAppIdTenantIdIndex(options?: ClientRequestOptions) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].index.$get(undefined, options))
}

export async function getAppidAppIdTenantIdHello(options?: ClientRequestOptions) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].hello.$get(undefined, options))
}

export async function putAppidAppIdTenantIdHello(options?: ClientRequestOptions) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].hello.$put(undefined, options))
}

export async function postAppidAppIdTenantIdHello(options?: ClientRequestOptions) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].hello.$post(undefined, options))
}

export async function deleteAppidAppIdTenantIdHello(options?: ClientRequestOptions) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].hello.$delete(undefined, options),
  )
}

export async function getAppidAppIdTelemetry(
  args: InferRequestType<(typeof client)['appid-<appId>']['telemetry']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].telemetry.$get(args, options))
}

export async function getAppidAppIdTenantIdUsersCount(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].users.count.$get(args, options))
}

export async function getAppidAppIdUsersCountActive(
  args: InferRequestType<(typeof client)['appid-<appId>']['users']['count']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].users.count.active.$get(args, options))
}

export async function getAppidAppIdTenantIdUsers(
  args: InferRequestType<(typeof client)['appid-<appId>']['<tenantId>']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>']['<tenantId>'].users.$get(args, options))
}

export async function postAppidAppIdUserRemove(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].user.remove.$post(args, options))
}

export async function getAppidAppIdUserSearchTags(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['search']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].user.search.tags.$get(args, options))
}

export async function getAppidAppIdEeFeatureflag(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['featureflag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].ee.featureflag.$get(args, options))
}

export async function getAppidAppIdEeLicense(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].ee.license.$get(args, options))
}

export async function putAppidAppIdEeLicense(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].ee.license.$put(args, options))
}

export async function deleteAppidAppIdEeLicense(
  args: InferRequestType<(typeof client)['appid-<appId>']['ee']['license']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].ee.license.$delete(args, options))
}

export async function getAppidAppIdUserId(
  args: InferRequestType<(typeof client)['appid-<appId>']['user']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].user.id.$get(args, options))
}

export async function getAppidAppIdTenantIdUsersByAccountinfo(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['users']['by-accountinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].users['by-accountinfo'].$get(args, options),
  )
}

export async function getAppidAppIdRequestsStats(
  args: InferRequestType<(typeof client)['appid-<appId>']['requests']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].requests.stats.$get(args, options))
}

export async function putRecipeMultitenancyConnectionuridomain(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.connectionuridomain.$put(args, options))
}

export async function putRecipeMultitenancyConnectionuridomainV2(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.v2.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.connectionuridomain.v2.$put(args, options))
}

export async function postRecipeMultitenancyConnectionuridomainRemove(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recipe.multitenancy.connectionuridomain.remove.$post(args, options),
  )
}

export async function getRecipeMultitenancyConnectionuridomainList(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recipe.multitenancy.connectionuridomain.list.$get(args, options),
  )
}

export async function getRecipeMultitenancyConnectionuridomainListV2(
  args: InferRequestType<typeof client.recipe.multitenancy.connectionuridomain.list.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.recipe.multitenancy.connectionuridomain.list.v2.$get(args, options),
  )
}

export async function putRecipeMultitenancyApp(
  args: InferRequestType<typeof client.recipe.multitenancy.app.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.app.$put(args, options))
}

export async function putRecipeMultitenancyAppV2(
  args: InferRequestType<typeof client.recipe.multitenancy.app.v2.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.app.v2.$put(args, options))
}

export async function postRecipeMultitenancyAppRemove(
  args: InferRequestType<typeof client.recipe.multitenancy.app.remove.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.app.remove.$post(args, options))
}

export async function getRecipeMultitenancyAppList(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.app.list.$get(args, options))
}

export async function getRecipeMultitenancyAppListV2(
  args: InferRequestType<typeof client.recipe.multitenancy.app.list.v2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recipe.multitenancy.app.list.v2.$get(args, options))
}

export async function putAppidAppIdRecipeMultitenancyTenant(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.multitenancy.tenant.$put(args, options))
}

export async function putAppidAppIdRecipeMultitenancyTenantV2(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['v2']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.multitenancy.tenant.v2.$put(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeMultitenancyTenant(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.$get(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeMultitenancyTenantV2(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.v2.$get(args, options),
  )
}

export async function getAppidAppIdTenantIdRecipeDashboardTenantCoreConfig(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['dashboard']['tenant']['core-config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.dashboard.tenant['core-config'].$get(
      args,
      options,
    ),
  )
}

export async function postAppidAppIdRecipeMultitenancyTenantRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.multitenancy.tenant.remove.$post(args, options),
  )
}

export async function getAppidAppIdRecipeMultitenancyTenantList(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.multitenancy.tenant.list.$get(args, options),
  )
}

export async function getAppidAppIdRecipeMultitenancyTenantListV2(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['multitenancy']['tenant']['list']['v2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.multitenancy.tenant.list.v2.$get(args, options),
  )
}

export async function putAppidAppIdTenantIdRecipeMultitenancyConfigThirdparty(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.$put(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeMultitenancyConfigThirdpartyRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['config']['thirdparty']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.config.thirdparty.remove.$post(
      args,
      options,
    ),
  )
}

export async function postAppidAppIdTenantIdRecipeMultitenancyTenantUser(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.$post(args, options),
  )
}

export async function postAppidAppIdTenantIdRecipeMultitenancyTenantUserRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['<tenantId>']['recipe']['multitenancy']['tenant']['user']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>']['<tenantId>'].recipe.multitenancy.tenant.user.remove.$post(
      args,
      options,
    ),
  )
}

export async function getAppidAppIdRecipeOauthClients(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.clients.$get(args, options))
}

export async function putAppidAppIdRecipeOauthClients(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.clients.$put(args, options))
}

export async function postAppidAppIdRecipeOauthClients(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['clients']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.clients.$post(args, options))
}

export async function getAppidAppIdRecipeOauthClientsList(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.clients.list.$get(args, options))
}

export async function postAppidAppIdRecipeOauthClientsRemove(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['clients']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.clients.remove.$post(args, options),
  )
}

export async function getAppidAppIdRecipeOauthAuthRequestsConsent(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.consent.$get(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsConsentAccept(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['accept']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.consent.accept.$put(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsConsentReject(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['consent']['reject']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.consent.reject.$put(args, options),
  )
}

export async function getAppidAppIdRecipeOauthAuthRequestsLogin(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.login.$get(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsLoginAccept(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['accept']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.login.accept.$put(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsLoginReject(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['login']['reject']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.login.reject.$put(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsLogoutAccept(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['accept']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.logout.accept.$put(args, options),
  )
}

export async function putAppidAppIdRecipeOauthAuthRequestsLogoutReject(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['auth']['requests']['logout']['reject']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.auth.requests.logout.reject.$put(args, options),
  )
}

export async function postAppidAppIdRecipeOauthSessionRevoke(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['session']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.session.revoke.$post(args, options),
  )
}

export async function postAppidAppIdRecipeOauthTokenRevoke(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['token']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.token.revoke.$post(args, options))
}

export async function postAppidAppIdRecipeOauthTokensRevoke(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['tokens']['revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.tokens.revoke.$post(args, options),
  )
}

export async function getAppidAppIdRecipeOauthAuth(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['auth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.auth.$get(args, options))
}

export async function postAppidAppIdRecipeOauthToken(
  args: InferRequestType<(typeof client)['appid-<appId>']['recipe']['oauth']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.token.$post(args, options))
}

export async function getAppidAppIdRecipeOauthSessionsLogout(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['sessions']['logout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['appid-<appId>'].recipe.oauth.sessions.logout.$get(args, options),
  )
}

export async function postAppidAppIdRecipeOauthIntrospect(
  args: InferRequestType<
    (typeof client)['appid-<appId>']['recipe']['oauth']['introspect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['appid-<appId>'].recipe.oauth.introspect.$post(args, options))
}

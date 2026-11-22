import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOcsV2PhpAppsUserLdapApiV1Config(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.user_ldap.api.v1.config.$post(args, options))
}

export async function getOcsV2PhpAppsUserLdapApiV1ConfigConfigID(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsUserLdapApiV1ConfigConfigID(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsUserLdapApiV1ConfigConfigID(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDTest(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['test']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].test.$post(args, options),
  )
}

export async function postOcsV2PhpAppsUserLdapApiV1ConfigConfigIDCopy(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['config'][':configID']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.config[':configID'].copy.$post(args, options),
  )
}

export async function postOcsV2PhpAppsUserLdapApiV1WizardConfigIDWizardAction(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard'][':configID'][':wizardAction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.wizard[':configID'][':wizardAction'].$post(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsUserLdapApiV1WizardClearMappings(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['user_ldap']['api']['v1']['wizard']['clearMappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.user_ldap.api.v1.wizard.clearMappings.$post(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBotsNameVersions(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].versions.$post(args, options))
}

export async function postIntentsNameVersions(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].versions.$post(args, options))
}

export async function postSlottypesNameVersions(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].versions.$post(args, options))
}

export async function deleteBotsName(
  args: InferRequestType<(typeof client.bots)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].$delete(args, options))
}

export async function getBotsBotNameAliasesName(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botName'].aliases[':name'].$get(args, options))
}

export async function putBotsBotNameAliasesName(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botName'].aliases[':name'].$put(args, options))
}

export async function deleteBotsBotNameAliasesName(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botName'].aliases[':name'].$delete(args, options))
}

export async function getBotsBotNameAliasesAliasNameChannelsName(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botName'].aliases[':aliasName'].channels[':name'].$get(args, options),
  )
}

export async function deleteBotsBotNameAliasesAliasNameChannelsName(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botName'].aliases[':aliasName'].channels[':name'].$delete(args, options),
  )
}

export async function deleteBotsNameVersionsVersion(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].versions[':version'].$delete(args, options))
}

export async function deleteIntentsName(
  args: InferRequestType<(typeof client.intents)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].$delete(args, options))
}

export async function getIntentsNameVersionsVersion(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].versions[':version'].$get(args, options))
}

export async function deleteIntentsNameVersionsVersion(
  args: InferRequestType<(typeof client.intents)[':name']['versions'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].versions[':version'].$delete(args, options))
}

export async function deleteSlottypesName(
  args: InferRequestType<(typeof client.slottypes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].$delete(args, options))
}

export async function deleteSlottypesNameVersionVersion(
  args: InferRequestType<(typeof client.slottypes)[':name']['version'][':version']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].version[':version'].$delete(args, options))
}

export async function deleteBotsBotNameUtterancesUserId(
  args: InferRequestType<(typeof client.bots)[':botName']['utterances'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botName'].utterances[':userId'].$delete(args, options))
}

export async function getBotsNameVersionsVersionoralias(
  args: InferRequestType<(typeof client.bots)[':name']['versions'][':versionoralias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].versions[':versionoralias'].$get(args, options))
}

export async function getBotsBotNameAliasesIndex(
  args: InferRequestType<(typeof client.bots)[':botName']['aliases']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botName'].aliases.index.$get(args, options))
}

export async function getBotsBotNameAliasesAliasNameChannelsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botName']['aliases'][':aliasName']['channels']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botName'].aliases[':aliasName'].channels.index.$get(args, options),
  )
}

export async function getBotsNameVersionsIndex(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].versions.index.$get(args, options))
}

export async function getBotsIndex(
  args: InferRequestType<typeof client.bots.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots.index.$get(args, options))
}

export async function getBuiltinsIntentsSignature(
  args: InferRequestType<(typeof client.builtins.intents)[':signature']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builtins.intents[':signature'].$get(args, options))
}

export async function getBuiltinsIntentsIndex(
  args: InferRequestType<typeof client.builtins.intents.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builtins.intents.index.$get(args, options))
}

export async function getBuiltinsSlottypesIndex(
  args: InferRequestType<typeof client.builtins.slottypes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.builtins.slottypes.index.$get(args, options))
}

export async function getExportsNameVersionResourceTypeExportType(
  args: InferRequestType<(typeof client.exports)['#name&version&resourceType&exportType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.exports['#name&version&resourceType&exportType'].$get(args, options),
  )
}

export async function getImportsImportId(
  args: InferRequestType<(typeof client.imports)[':importId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports[':importId'].$get(args, options))
}

export async function getIntentsNameVersionsIndex(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].versions.index.$get(args, options))
}

export async function getIntentsIndex(
  args: InferRequestType<typeof client.intents.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents.index.$get(args, options))
}

export async function getMigrationsMigrationId(
  args: InferRequestType<(typeof client.migrations)[':migrationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.migrations[':migrationId'].$get(args, options))
}

export async function getMigrations(
  args: InferRequestType<typeof client.migrations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.migrations.$get(args, options))
}

export async function postMigrations(
  args: InferRequestType<typeof client.migrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.migrations.$post(args, options))
}

export async function getSlottypesNameVersionsVersion(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].versions[':version'].$get(args, options))
}

export async function getSlottypesNameVersionsIndex(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].versions.index.$get(args, options))
}

export async function getSlottypesIndex(
  args: InferRequestType<typeof client.slottypes.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes.index.$get(args, options))
}

export async function getBotsBotnameUtterancesViewAggregationBotVersionsStatusType(
  args: InferRequestType<
    (typeof client.bots)[':botname']['utterances#view=aggregation&bot_versions&status_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botname']['utterances#view=aggregation&bot_versions&status_type'].$get(
      args,
      options,
    ),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function putBotsNameVersionsLATEST(
  args: InferRequestType<(typeof client.bots)[':name']['versions']['$LATEST']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':name'].versions.$LATEST.$put(args, options))
}

export async function putIntentsNameVersionsLATEST(
  args: InferRequestType<(typeof client.intents)[':name']['versions']['$LATEST']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intents[':name'].versions.$LATEST.$put(args, options))
}

export async function putSlottypesNameVersionsLATEST(
  args: InferRequestType<(typeof client.slottypes)[':name']['versions']['$LATEST']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slottypes[':name'].versions.$LATEST.$put(args, options))
}

export async function postImportsIndex(
  args: InferRequestType<typeof client.imports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.index.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

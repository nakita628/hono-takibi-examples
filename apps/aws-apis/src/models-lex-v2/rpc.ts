import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchcreate(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchcreate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.DEFAULT.batchcreate.$put(args, options),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchdelete(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchdelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.DEFAULT.batchdelete.$post(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTBatchupdate(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['batchupdate']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.DEFAULT.batchupdate.$put(args, options),
  )
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$get(
      args,
      options,
    ),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$put(
      args,
      options,
    ),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$post(
      args,
      options,
    ),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].index.$delete(
      args,
      options,
    ),
  )
}

export async function putBotsIndex(
  args: InferRequestType<typeof client.bots.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots.index.$put(args, options))
}

export async function postBotsIndex(
  args: InferRequestType<typeof client.bots.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots.index.$post(args, options))
}

export async function putBotsBotIdBotaliasesIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].botaliases.index.$put(args, options))
}

export async function postBotsBotIdBotaliasesIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['botaliases']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].botaliases.index.$post(args, options))
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales.index.$put(args, options),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales.index.$post(args, options),
  )
}

export async function putBotsBotIdBotversionsIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].botversions.index.$put(args, options))
}

export async function postBotsBotIdBotversionsIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['botversions']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].botversions.index.$post(args, options))
}

export async function putExportsIndex(
  args: InferRequestType<typeof client.exports.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.index.$put(args, options))
}

export async function postExportsIndex(
  args: InferRequestType<typeof client.exports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.index.$post(args, options))
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents.index.$put(
      args,
      options,
    ),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents.index.$post(
      args,
      options,
    ),
  )
}

export async function getPolicyResourceArnIndex(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy[':resourceArn'].index.$get(args, options))
}

export async function putPolicyResourceArnIndex(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy[':resourceArn'].index.$put(args, options))
}

export async function postPolicyResourceArnIndex(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy[':resourceArn'].index.$post(args, options))
}

export async function deletePolicyResourceArnIndex(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy[':resourceArn'].index.$delete(args, options))
}

export async function postPolicyResourceArnStatementsIndex(
  args: InferRequestType<(typeof client.policy)[':resourceArn']['statements']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.policy[':resourceArn'].statements.index.$post(args, options))
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].slots.index.$put(args, options),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].slots.index.$post(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes.index.$put(
      args,
      options,
    ),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes.index.$post(
      args,
      options,
    ),
  )
}

export async function postCreateuploadurlIndex(
  args: InferRequestType<typeof client.createuploadurl.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createuploadurl.index.$post(args, options))
}

export async function getBotsBotIdIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].index.$get(args, options))
}

export async function putBotsBotIdIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].index.$put(args, options))
}

export async function deleteBotsBotIdIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].index.$delete(args, options))
}

export async function getBotsBotIdBotaliasesBotAliasIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botaliases[':botAliasId'].index.$get(args, options),
  )
}

export async function putBotsBotIdBotaliasesBotAliasIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botaliases[':botAliasId'].index.$put(args, options),
  )
}

export async function deleteBotsBotIdBotaliasesBotAliasIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botaliases'][':botAliasId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botaliases[':botAliasId'].index.$delete(args, options),
  )
}

export async function getBotsBotIdBotversionsBotVersionIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].index.$get(args, options),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].index.$delete(args, options),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabulary(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.$delete(args, options),
  )
}

export async function getExportsExportIdIndex(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':exportId'].index.$get(args, options))
}

export async function putExportsExportIdIndex(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':exportId'].index.$put(args, options))
}

export async function deleteExportsExportIdIndex(
  args: InferRequestType<(typeof client.exports)[':exportId']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':exportId'].index.$delete(args, options))
}

export async function getImportsImportIdIndex(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports[':importId'].index.$get(args, options))
}

export async function deleteImportsImportIdIndex(
  args: InferRequestType<(typeof client.imports)[':importId']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports[':importId'].index.$delete(args, options))
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].index.$get(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].index.$put(args, options),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].index.$delete(args, options),
  )
}

export async function deletePolicyResourceArnStatementsStatementIdIndex(
  args: InferRequestType<
    (typeof client.policy)[':resourceArn']['statements'][':statementId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.policy[':resourceArn'].statements[':statementId'].index.$delete(args, options),
  )
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].slots[':slotId'].index.$get(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].slots[':slotId'].index.$put(args, options),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdIntentsIntentIdSlotsSlotIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['intents'][':intentId']['slots'][':slotId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].intents[
      ':intentId'
    ].slots[':slotId'].index.$delete(args, options),
  )
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
      ':slotTypeId'
    ].index.$get(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
      ':slotTypeId'
    ].index.$put(args, options),
  )
}

export async function deleteBotsBotIdBotversionsBotVersionBotlocalesLocaleIdSlottypesSlotTypeIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['slottypes'][':slotTypeId']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].slottypes[
      ':slotTypeId'
    ].index.$delete(args, options),
  )
}

export async function deleteBotsBotIdUtterancesIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['utterances']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].utterances.index.$delete(args, options))
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
      ':botRecommendationId'
    ].index.$get(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
      ':botRecommendationId'
    ].index.$put(args, options),
  )
}

export async function getBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTMetadata(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.DEFAULT.metadata.$get(args, options),
  )
}

export async function postBotsBotIdAggregatedutterancesIndex(
  args: InferRequestType<(typeof client.bots)[':botId']['aggregatedutterances']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bots[':botId'].aggregatedutterances.index.$post(args, options))
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].botrecommendations.index.$put(args, options),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsIndex(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].botrecommendations.index.$post(args, options),
  )
}

export async function postBuiltinsLocalesLocaleIdIntentsIndex(
  args: InferRequestType<
    (typeof client.builtins.locales)[':localeId']['intents']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.builtins.locales[':localeId'].intents.index.$post(args, options),
  )
}

export async function postBuiltinsLocalesLocaleIdSlottypesIndex(
  args: InferRequestType<
    (typeof client.builtins.locales)[':localeId']['slottypes']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.builtins.locales[':localeId'].slottypes.index.$post(args, options),
  )
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdCustomvocabularyDEFAULTList(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['customvocabulary']['DEFAULT']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[
      ':localeId'
    ].customvocabulary.DEFAULT.list.$post(args, options),
  )
}

export async function putImportsIndex(
  args: InferRequestType<typeof client.imports.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.index.$put(args, options))
}

export async function postImportsIndex(
  args: InferRequestType<typeof client.imports.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.imports.index.$post(args, options))
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdIntents(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['intents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
      ':botRecommendationId'
    ].intents.$post(args, options),
  )
}

export async function getTagsResourceARN(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceARN'].$get(args, options))
}

export async function postTagsResourceARN(
  args: InferRequestType<(typeof client.tags)[':resourceARN']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceARN'].$post(args, options))
}

export async function postBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdAssociatedtranscripts(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['associatedtranscripts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
      ':botRecommendationId'
    ].associatedtranscripts.$post(args, options),
  )
}

export async function putBotsBotIdBotversionsBotVersionBotlocalesLocaleIdBotrecommendationsBotRecommendationIdStopbotrecommendation(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botversions'][':botVersion']['botlocales'][':localeId']['botrecommendations'][':botRecommendationId']['stopbotrecommendation']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botversions[':botVersion'].botlocales[':localeId'].botrecommendations[
      ':botRecommendationId'
    ].stopbotrecommendation.$put(args, options),
  )
}

export async function deleteTagsResourceARNTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceARN#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceARN#tagKeys'].$delete(args, options))
}

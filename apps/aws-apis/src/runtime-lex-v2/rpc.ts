import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
      ':sessionId'
    ].$get(args, options),
  )
}

export async function postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
      ':sessionId'
    ].$post(args, options),
  )
}

export async function deleteBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionId(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
      ':sessionId'
    ].$delete(args, options),
  )
}

export async function postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdText(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[
      ':sessionId'
    ].text.$post(args, options),
  )
}

export async function postBotsBotIdBotAliasesBotAliasIdBotLocalesLocaleIdSessionsSessionIdUtteranceContentType(
  args: InferRequestType<
    (typeof client.bots)[':botId']['botAliases'][':botAliasId']['botLocales'][':localeId']['sessions'][':sessionId']['utterance#Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bots[':botId'].botAliases[':botAliasId'].botLocales[':localeId'].sessions[':sessionId'][
      'utterance#Content-Type'
    ].$post(args, options),
  )
}

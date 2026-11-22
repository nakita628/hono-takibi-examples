import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBotBotNameAliasBotAliasUserUserIdSession(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$post(args, options),
  )
}

export async function deleteBotBotNameAliasBotAliasUserUserIdSession(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bot[':botName'].alias[':botAlias'].user[':userId'].session.$delete(args, options),
  )
}

export async function getBotBotNameAliasBotAliasUserUserIdSessionIndex(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['session']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bot[':botName'].alias[':botAlias'].user[':userId'].session.index.$get(args, options),
  )
}

export async function postBotBotNameAliasBotAliasUserUserIdContentContentType(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['content#Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bot[':botName'].alias[':botAlias'].user[':userId']['content#Content-Type'].$post(
      args,
      options,
    ),
  )
}

export async function postBotBotNameAliasBotAliasUserUserIdText(
  args: InferRequestType<
    (typeof client.bot)[':botName']['alias'][':botAlias']['user'][':userId']['text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.bot[':botName'].alias[':botAlias'].user[':userId'].text.$post(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFormatRotoBallerArticles(
  args: InferRequestType<(typeof client)[':format']['RotoBallerArticles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':format'].RotoBallerArticles.$get(args, options))
}

export async function getFormatRotoBallerArticlesByDateDate(
  args: InferRequestType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RotoBallerArticlesByDate[':date'].$get(args, options),
  )
}

export async function getFormatRotoBallerArticlesByPlayerIDPlayerid(
  args: InferRequestType<
    (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':format'].RotoBallerArticlesByPlayerID[':playerid'].$get(args, options),
  )
}

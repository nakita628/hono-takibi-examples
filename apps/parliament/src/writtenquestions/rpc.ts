import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiDailyreportsDailyreports(
  args: InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.dailyreports.dailyreports.$get(args, options))
}

export async function getApiWrittenquestionsQuestions(
  args: InferRequestType<typeof client.api.writtenquestions.questions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.writtenquestions.questions.$get(args, options))
}

export async function getApiWrittenquestionsQuestionsDateUin(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.writtenquestions.questions[':date'][':uin'].$get(args, options),
  )
}

export async function getApiWrittenquestionsQuestionsId(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.writtenquestions.questions[':id'].$get(args, options))
}

export async function getApiWrittenstatementsStatements(
  args: InferRequestType<typeof client.api.writtenstatements.statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.writtenstatements.statements.$get(args, options))
}

export async function getApiWrittenstatementsStatementsDateUin(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.writtenstatements.statements[':date'][':uin'].$get(args, options),
  )
}

export async function getApiWrittenstatementsStatementsId(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.writtenstatements.statements[':id'].$get(args, options))
}

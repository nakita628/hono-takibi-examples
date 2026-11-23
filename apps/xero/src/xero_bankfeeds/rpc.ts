import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFeedConnections(
  args: InferRequestType<typeof client.FeedConnections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FeedConnections.$get(args, options))
}

export async function postFeedConnections(
  args: InferRequestType<typeof client.FeedConnections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FeedConnections.$post(args, options))
}

export async function getFeedConnectionsId(
  args: InferRequestType<(typeof client.FeedConnections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FeedConnections[':id'].$get(args, options))
}

export async function postFeedConnectionsDeleteRequests(
  args: InferRequestType<typeof client.FeedConnections.DeleteRequests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.FeedConnections.DeleteRequests.$post(args, options))
}

export async function getStatements(
  args: InferRequestType<typeof client.Statements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Statements.$get(args, options))
}

export async function postStatements(
  args: InferRequestType<typeof client.Statements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Statements.$post(args, options))
}

export async function getStatementsStatementId(
  args: InferRequestType<(typeof client.Statements)[':statementId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Statements[':statementId'].$get(args, options))
}

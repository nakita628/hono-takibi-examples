import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBackendAppIdEnvironmentsBackendEnvironmentNameClone(
  args: InferRequestType<
    (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['clone']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].environments[':backendEnvironmentName'].clone.$post(args, options),
  )
}

export async function postBackend(
  args: InferRequestType<typeof client.backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend.$post(args, options))
}

export async function postBackendAppIdApi(
  args: InferRequestType<(typeof client.backend)[':appId']['api']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].api.$post(args, options))
}

export async function postBackendAppIdAuth(
  args: InferRequestType<(typeof client.backend)[':appId']['auth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].auth.$post(args, options))
}

export async function postBackendAppIdConfig(
  args: InferRequestType<(typeof client.backend)[':appId']['config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].config.$post(args, options))
}

export async function postBackendAppIdStorage(
  args: InferRequestType<(typeof client.backend)[':appId']['storage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].storage.$post(args, options))
}

export async function postBackendAppIdChallenge(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].challenge.$post(args, options))
}

export async function postBackendAppIdEnvironmentsBackendEnvironmentNameRemove(
  args: InferRequestType<
    (typeof client.backend)[':appId']['environments'][':backendEnvironmentName']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].environments[':backendEnvironmentName'].remove.$post(args, options),
  )
}

export async function postBackendAppIdApiBackendEnvironmentNameRemove(
  args: InferRequestType<
    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].api[':backendEnvironmentName'].remove.$post(args, options),
  )
}

export async function postBackendAppIdAuthBackendEnvironmentNameRemove(
  args: InferRequestType<
    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].auth[':backendEnvironmentName'].remove.$post(args, options),
  )
}

export async function postBackendAppIdStorageBackendEnvironmentNameRemove(
  args: InferRequestType<
    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].storage[':backendEnvironmentName'].remove.$post(args, options),
  )
}

export async function postBackendAppIdChallengeSessionIdRemove(
  args: InferRequestType<
    (typeof client.backend)[':appId']['challenge'][':sessionId']['remove']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].challenge[':sessionId'].remove.$post(args, options),
  )
}

export async function postBackendAppIdApiBackendEnvironmentNameGenerateModels(
  args: InferRequestType<
    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['generateModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].api[':backendEnvironmentName'].generateModels.$post(args, options),
  )
}

export async function postBackendAppIdDetails(
  args: InferRequestType<(typeof client.backend)[':appId']['details']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].details.$post(args, options))
}

export async function postBackendAppIdApiBackendEnvironmentNameDetails(
  args: InferRequestType<
    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].api[':backendEnvironmentName'].details.$post(args, options),
  )
}

export async function postBackendAppIdApiBackendEnvironmentNameGetModels(
  args: InferRequestType<
    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['getModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].api[':backendEnvironmentName'].getModels.$post(args, options),
  )
}

export async function postBackendAppIdAuthBackendEnvironmentNameDetails(
  args: InferRequestType<
    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].auth[':backendEnvironmentName'].details.$post(args, options),
  )
}

export async function getBackendAppIdJobBackendEnvironmentNameJobId(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$get(args, options),
  )
}

export async function postBackendAppIdJobBackendEnvironmentNameJobId(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName'][':jobId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].job[':backendEnvironmentName'][':jobId'].$post(args, options),
  )
}

export async function postBackendAppIdStorageBackendEnvironmentNameDetails(
  args: InferRequestType<
    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['details']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].storage[':backendEnvironmentName'].details.$post(args, options),
  )
}

export async function getBackendAppIdChallengeSessionId(
  args: InferRequestType<(typeof client.backend)[':appId']['challenge'][':sessionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].challenge[':sessionId'].$get(args, options))
}

export async function postBackendAppIdAuthBackendEnvironmentNameImport(
  args: InferRequestType<
    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].auth[':backendEnvironmentName'].import.$post(args, options),
  )
}

export async function postBackendAppIdStorageBackendEnvironmentNameImport(
  args: InferRequestType<
    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['import']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].storage[':backendEnvironmentName'].import.$post(args, options),
  )
}

export async function postBackendAppIdJobBackendEnvironmentName(
  args: InferRequestType<
    (typeof client.backend)[':appId']['job'][':backendEnvironmentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].job[':backendEnvironmentName'].$post(args, options),
  )
}

export async function postS3Buckets(
  args: InferRequestType<typeof client.s3Buckets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.s3Buckets.$post(args, options))
}

export async function postBackendAppIdRemove(
  args: InferRequestType<(typeof client.backend)[':appId']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].remove.$post(args, options))
}

export async function postBackendAppIdConfigRemove(
  args: InferRequestType<(typeof client.backend)[':appId']['config']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].config.remove.$post(args, options))
}

export async function postBackendAppIdApiBackendEnvironmentName(
  args: InferRequestType<
    (typeof client.backend)[':appId']['api'][':backendEnvironmentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].api[':backendEnvironmentName'].$post(args, options),
  )
}

export async function postBackendAppIdAuthBackendEnvironmentName(
  args: InferRequestType<
    (typeof client.backend)[':appId']['auth'][':backendEnvironmentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].auth[':backendEnvironmentName'].$post(args, options),
  )
}

export async function postBackendAppIdConfigUpdate(
  args: InferRequestType<(typeof client.backend)[':appId']['config']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backend[':appId'].config.update.$post(args, options))
}

export async function postBackendAppIdStorageBackendEnvironmentName(
  args: InferRequestType<
    (typeof client.backend)[':appId']['storage'][':backendEnvironmentName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.backend[':appId'].storage[':backendEnvironmentName'].$post(args, options),
  )
}
